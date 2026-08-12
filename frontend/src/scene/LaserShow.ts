import * as THREE from "three";

interface LaserBeam {
  mesh: THREE.Mesh;
  pivot: THREE.Group;
  speed: number;
  phase: number;
  flashOffset: number;
  baseOpacity: number;
}

/** Beat-driven lasers over the stage / crowd. */
export class LaserShow {
  readonly root = new THREE.Group();
  private readonly beams: LaserBeam[] = [];
  private readonly strobes: THREE.PointLight[] = [];
  private themeUntil = 0;
  private readonly defaultColors = [0xff8a4a, 0x2de0ff, 0xff4fa3, 0xffe066];

  constructor() {
    this.root.name = "LaserShow";
    this.addBeams();
    this.addStrobes();
  }

  setTheme(color: number, seconds = 4): void {
    this.themeUntil = performance.now() + seconds * 1000;
    for (let i = 0; i < this.beams.length; i++) {
      const mat = this.beams[i]!.mesh.material as THREE.MeshBasicMaterial;
      mat.color.setHex(i % 2 === 0 ? color : 0xffffff);
    }
  }

  update(time: number): void {
    if (this.themeUntil && performance.now() > this.themeUntil) {
      this.themeUntil = 0;
      for (let i = 0; i < this.beams.length; i++) {
        const mat = this.beams[i]!.mesh.material as THREE.MeshBasicMaterial;
        mat.color.setHex(this.defaultColors[i % this.defaultColors.length]!);
      }
    }
    const beat = time * ((128 / 60) * Math.PI);
    const kick = Math.abs(Math.sin(beat));
    for (const beam of this.beams) {
      beam.pivot.rotation.y = time * beam.speed + beam.phase;
      beam.pivot.rotation.x =
        -0.55 + Math.sin(time * beam.speed * 1.4 + beam.phase) * 0.45;
      const hard = kick > 0.7 || Math.sin(time * 14 + beam.flashOffset) > 0.3;
      (beam.mesh.material as THREE.MeshBasicMaterial).opacity =
        beam.baseOpacity * (hard ? 1 : 0.25);
    }
    for (let i = 0; i < this.strobes.length; i++) {
      this.strobes[i]!.intensity = kick > 0.82 ? 7 + i * 2 : 0;
    }
  }

  private addBeams(): void {
    const colors = [0xff8a4a, 0x2de0ff, 0xff4fa3, 0xffe066, 0xb06bff, 0xffffff];
    const origins = [
      { x: -3.2, y: 7.6, z: -5.0 },
      { x: 3.2, y: 7.6, z: -5.0 },
      { x: -1.6, y: 7.3, z: -4.0 },
      { x: 1.6, y: 7.3, z: -4.0 },
      { x: 0, y: 7.8, z: -5.5 },
      { x: -2.2, y: 7.0, z: -3.2 },
    ];
    for (let i = 0; i < origins.length; i++) {
      const o = origins[i]!;
      const pivot = new THREE.Group();
      pivot.position.set(o.x, o.y, o.z);
      const length = 6.5;
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.38,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.06, length, 4, 1, true),
        mat,
      );
      mesh.position.y = -length / 2;
      pivot.add(mesh);
      this.root.add(pivot);
      this.beams.push({
        mesh,
        pivot,
        speed: 0.65 + i * 0.12,
        phase: i * 0.85,
        flashOffset: i * 1.1,
        baseOpacity: 0.4,
      });
    }
  }

  private addStrobes(): void {
    for (const [x, y, z, color] of [
      [0, 7.6, -3.5, 0xffe8d0],
      [-3, 6.8, -2.5, 0xff4fa3],
      [3, 6.8, -2.5, 0x4fd0ff],
    ] as const) {
      const light = new THREE.PointLight(color, 0, 11, 2);
      light.position.set(x, y, z);
      this.strobes.push(light);
      this.root.add(light);
    }
  }
}
