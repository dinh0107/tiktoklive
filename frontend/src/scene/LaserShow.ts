import * as THREE from "three";

interface LaserBeam {
  core: THREE.Mesh;
  glow: THREE.Mesh;
  pivot: THREE.Group;
  speed: number;
  phase: number;
  flashOffset: number;
  baseOpacity: number;
  sweep: number;
}

/**
 * Soft volumetric-style lasers (core + glow) — beat synced.
 */
export class LaserShow {
  readonly root = new THREE.Group();
  private readonly beams: LaserBeam[] = [];
  private readonly strobes: THREE.PointLight[] = [];
  private themeUntil = 0;
  private readonly defaultColors = [
    0xff4fa3, 0x2de0ff, 0xffe066, 0xb06bff, 0xff8a4a, 0x7CFFB0, 0xffffff,
    0xff6ad5,
  ];
  private readonly coreTex: THREE.CanvasTexture;
  private readonly glowTex: THREE.CanvasTexture;

  constructor() {
    this.root.name = "LaserShow";
    this.coreTex = makeLaserCoreTexture();
    this.glowTex = makeLaserGlowTexture();
    this.addBeams();
    this.addFanScanners();
    this.addStrobes();
  }

  setTheme(color: number, seconds = 4): void {
    this.themeUntil = performance.now() + seconds * 1000;
    for (let i = 0; i < this.beams.length; i++) {
      const c = i % 2 === 0 ? color : 0xffffff;
      (this.beams[i]!.core.material as THREE.MeshBasicMaterial).color.setHex(c);
      (this.beams[i]!.glow.material as THREE.MeshBasicMaterial).color.setHex(c);
    }
  }

  update(time: number): void {
    if (this.themeUntil && performance.now() > this.themeUntil) {
      this.themeUntil = 0;
      for (let i = 0; i < this.beams.length; i++) {
        const hex = this.defaultColors[i % this.defaultColors.length]!;
        (this.beams[i]!.core.material as THREE.MeshBasicMaterial).color.setHex(
          hex,
        );
        (this.beams[i]!.glow.material as THREE.MeshBasicMaterial).color.setHex(
          hex,
        );
      }
    }

    const beat = time * ((128 / 60) * Math.PI);
    const kick = Math.abs(Math.sin(beat));
    const hard = kick > 0.78 ? 1 : kick;

    for (const beam of this.beams) {
      beam.pivot.rotation.y =
        time * beam.speed * 1.35 +
        beam.phase +
        Math.sin(time * 1.1 + beam.phase) * 0.55;
      beam.pivot.rotation.x =
        -0.75 +
        Math.sin(time * beam.speed * 1.4 + beam.phase) * 0.55 +
        Math.sin(time * beam.sweep + beam.phase) * 0.35;

      const flicker =
        hard > 0.9 || Math.sin(time * 22 + beam.flashOffset) > 0.05
          ? 1
          : 0.25 + kick * 0.4;
      const coreMat = beam.core.material as THREE.MeshBasicMaterial;
      const glowMat = beam.glow.material as THREE.MeshBasicMaterial;
      coreMat.opacity = Math.min(1, beam.baseOpacity * 1.35 * flicker);
      glowMat.opacity = Math.min(0.95, beam.baseOpacity * 0.75 * flicker);
    }

    for (let i = 0; i < this.strobes.length; i++) {
      const burst = hard > 0.88 ? 14 + i * 3 : kick * 2.5;
      this.strobes[i]!.intensity = burst;
    }
  }

  private addBeams(): void {
    const origins = [
      { x: -3.4, y: 7.8, z: -5.1 },
      { x: 3.4, y: 7.8, z: -5.1 },
      { x: -1.8, y: 7.5, z: -4.2 },
      { x: 1.8, y: 7.5, z: -4.2 },
      { x: 0, y: 8.0, z: -5.6 },
      { x: -2.6, y: 7.2, z: -3.4 },
      { x: 2.6, y: 7.2, z: -3.4 },
      { x: 0, y: 7.4, z: -3.8 },
    ];
    for (let i = 0; i < origins.length; i++) {
      this.spawnBeam(origins[i]!, i, 7.2, 0.95 + i * 0.1, 0.78);
    }
  }

  /** Wide sweeping sheets for club look */
  private addFanScanners(): void {
    const fans = [
      { x: -4.2, y: 7.0, z: -4.6 },
      { x: 4.2, y: 7.0, z: -4.6 },
    ];
    for (let i = 0; i < fans.length; i++) {
      this.spawnBeam(fans[i]!, 8 + i, 8.0, 0.55 + i * 0.08, 0.88, true);
    }
  }

  private spawnBeam(
    o: { x: number; y: number; z: number },
    index: number,
    length: number,
    speed: number,
    baseOpacity: number,
    wide = false,
  ): void {
    const color = this.defaultColors[index % this.defaultColors.length]!;
    const pivot = new THREE.Group();
    pivot.position.set(o.x, o.y, o.z);

    const coreMat = new THREE.MeshBasicMaterial({
      map: this.coreTex,
      color,
      transparent: true,
      opacity: baseOpacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const glowMat = new THREE.MeshBasicMaterial({
      map: this.glowTex,
      color,
      transparent: true,
      opacity: baseOpacity * 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      side: THREE.DoubleSide,
    });

    const coreR = wide ? 0.05 : 0.028;
    const glowR = wide ? 0.28 : 0.14;

    const core = new THREE.Mesh(
      new THREE.CylinderGeometry(coreR * 0.45, coreR, length, 8, 1, true),
      coreMat,
    );
    core.position.y = -length / 2;

    // Soft glow as a flat sheet — reads better than thin tube alone
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(glowR * 2, length),
      glowMat,
    );
    glow.position.y = -length / 2;

    pivot.add(glow);
    pivot.add(core);
    this.root.add(pivot);

    this.beams.push({
      core,
      glow,
      pivot,
      speed,
      phase: index * 0.9,
      flashOffset: index * 1.15,
      baseOpacity,
      sweep: wide ? 1.8 : 0.9,
    });
  }

  private addStrobes(): void {
    for (const [x, y, z, color] of [
      [0, 7.8, -3.2, 0xffe8d0],
      [-3.5, 7.0, -2.8, 0xff4fa3],
      [3.5, 7.0, -2.8, 0x4fd0ff],
      [0, 6.5, -1.5, 0xb06bff],
      [-2.2, 6.8, 0.5, 0xffe066],
      [2.2, 6.8, 0.5, 0x7cffb0],
    ] as const) {
      const light = new THREE.PointLight(color, 0, 16, 1.6);
      light.position.set(x, y, z);
      this.strobes.push(light);
      this.root.add(light);
    }
  }
}

function makeLaserCoreTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(32, 0, 32, 256);
  g.addColorStop(0, "rgba(255,255,255,0)");
  g.addColorStop(0.08, "rgba(255,255,255,1)");
  g.addColorStop(0.85, "rgba(255,255,255,0.75)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 256);

  const across = ctx.createLinearGradient(0, 0, 64, 0);
  across.addColorStop(0, "rgba(0,0,0,0)");
  across.addColorStop(0.45, "rgba(255,255,255,1)");
  across.addColorStop(0.55, "rgba(255,255,255,1)");
  across.addColorStop(1, "rgba(0,0,0,0)");
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = across;
  ctx.fillRect(0, 0, 64, 256);

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function makeLaserGlowTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(64, 0, 64, 256);
  g.addColorStop(0, "rgba(255,255,255,0)");
  g.addColorStop(0.12, "rgba(255,255,255,0.85)");
  g.addColorStop(0.8, "rgba(255,255,255,0.45)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 256);

  const across = ctx.createLinearGradient(0, 0, 128, 0);
  across.addColorStop(0, "rgba(0,0,0,0)");
  across.addColorStop(0.5, "rgba(255,255,255,1)");
  across.addColorStop(1, "rgba(0,0,0,0)");
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = across;
  ctx.fillRect(0, 0, 128, 256);

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
