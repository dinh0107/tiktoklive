import * as THREE from "three";
import { DjBooth } from "./DjBooth";
import { DiscoBall } from "./DiscoBall";
import { LaserShow } from "./LaserShow";
import { TopDonorScreen } from "./TopDonorScreen";
import type { DonorScore } from "../gifts/DonorLeaderboard";

/**
 * Outdoor open-air DJ night: center stage, crowd floor in front.
 */
export class BarScene {
  readonly root = new THREE.Group();
  readonly dj: DjBooth;
  readonly lasers: LaserShow;
  readonly disco: DiscoBall;
  readonly donorScreen: TopDonorScreen;

  private readonly floorTiles: THREE.Mesh[] = [];
  private readonly neonMats: THREE.MeshStandardMaterial[] = [];
  private readonly neonSigns: THREE.Sprite[] = [];
  private streakSign: THREE.Sprite | null = null;
  private streakUntil = 0;
  private streakVisible = false;
  private readonly sparkles: THREE.Points;
  private readonly sparklePositions: Float32Array;
  private readonly festoonLights: THREE.PointLight[] = [];

  constructor() {
    this.root.name = "BarScene";

    this.addGround();
    this.addNightSky();
    this.addHorizonSilhouette();
    this.addDanceFloor();
    this.addFestoon();
    this.addNeonProps();
    this.sparkles = this.addSparkles();
    this.sparklePositions = this.sparkles.geometry.attributes.position!
      .array as Float32Array;

    this.disco = new DiscoBall();
    this.disco.root.position.set(0, 8.4, -5.2);
    this.root.add(this.disco.root);

    this.donorScreen = new TopDonorScreen();
    this.root.add(this.donorScreen.root);

    this.dj = new DjBooth();
    this.root.add(this.dj.root);

    this.lasers = new LaserShow();
    this.root.add(this.lasers.root);
  }

  update(time: number, frame = 0): void {
    this.disco.update(time);
    this.dj.update(time);
    this.lasers.update(time);
    this.donorScreen.update(time);

    const beat = time * ((128 / 60) * Math.PI);
    const kick = Math.abs(Math.sin(beat));

    for (let i = 0; i < this.floorTiles.length; i++) {
      const mat = this.floorTiles[i]!.material as THREE.MeshStandardMaterial;
      const local = Math.abs(Math.sin(beat + i * 0.7));
      mat.emissiveIntensity =
        local > 0.55 ? 0.55 + local * 1.4 : 0.08 + kick * 0.2;
    }

    for (let i = 0; i < this.neonMats.length; i++) {
      this.neonMats[i]!.emissiveIntensity =
        0.7 + Math.sin(beat * 2 + i) * 0.45;
    }

    if (this.festoonLights[0]) {
      this.festoonLights[0]!.intensity = 1.6 + kick * 1.8;
    }

    for (let i = 0; i < this.neonSigns.length; i++) {
      if (i === 0 && this.streakVisible) continue;
      const mat = this.neonSigns[i]!.material as THREE.SpriteMaterial;
      mat.opacity = 0.75 + kick * 0.25;
    }

    if (this.streakSign && this.streakVisible) {
      if (performance.now() > this.streakUntil) {
        this.clearStreakBanner();
      } else {
        const mat = this.streakSign.material as THREE.SpriteMaterial;
        mat.opacity = 0.75 + kick * 0.25;
      }
    }

    if (frame % 4 < 2) {
      const sparkMat = this.sparkles.material as THREE.PointsMaterial;
      sparkMat.opacity = 0.35 + kick * 0.45;
      for (let i = 0; i < this.sparklePositions.length; i += 3) {
        this.sparklePositions[i + 1]! += 0.035 + kick * 0.02;
        this.sparklePositions[i]! += Math.sin(time + i) * 0.008;
        if (this.sparklePositions[i + 1]! > 8) {
          this.sparklePositions[i + 1] = 0.6;
          this.sparklePositions[i] = (Math.random() - 0.5) * 14;
          this.sparklePositions[i + 2] = -1 + (Math.random() - 0.5) * 6;
        }
      }
      this.sparkles.geometry.attributes.position!.needsUpdate = true;
    }
  }

  showStreakBanner(giftLabel: string, count: number, user: string): void {
    const line1 = count > 1 ? `${giftLabel} x${count}` : giftLabel;
    const line2 = `@${user.replace(/^@/, "")}`;
    if (!this.streakSign) {
      this.streakSign = makeStreakSign(line1, line2, 0, 6.2, -7.2, 6.5);
      this.root.add(this.streakSign);
    } else {
      redrawStreakSign(this.streakSign, line1, line2);
    }
    this.streakVisible = true;
    this.streakUntil = performance.now() + 14_000;
    const meme = this.neonSigns[0];
    if (meme) (meme.material as THREE.SpriteMaterial).opacity = 0.2;
  }

  clearStreakBanner(): void {
    this.streakVisible = false;
    if (this.streakSign) {
      (this.streakSign.material as THREE.SpriteMaterial).opacity = 0;
    }
    const meme = this.neonSigns[0];
    if (meme) (meme.material as THREE.SpriteMaterial).opacity = 1;
  }

  showTopDonor(donor: DonorScore, flash = true): void {
    this.donorScreen.showDonor(donor, flash);
  }

  private addGround(): void {
    const grassTex = makeGrassTexture();
    grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping;
    grassTex.repeat.set(8, 6);
    const grass = new THREE.Mesh(
      new THREE.PlaneGeometry(52, 40),
      new THREE.MeshStandardMaterial({
        map: grassTex,
        color: 0xc8e8b0,
        roughness: 0.92,
        metalness: 0.02,
      }),
    );
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.02;
    this.root.add(grass);

    const dirtTex = makeDirtTexture();
    const dirt = new THREE.Mesh(
      new THREE.CircleGeometry(10, 40),
      new THREE.MeshStandardMaterial({
        map: dirtTex,
        color: 0xe8d4b0,
        roughness: 0.85,
      }),
    );
    dirt.rotation.x = -Math.PI / 2;
    dirt.position.set(0, 0.01, 0.2);
    this.root.add(dirt);
  }

  private addNightSky(): void {
    const skyTex = makeFestivalSkyTexture();
    const sky = new THREE.Mesh(
      new THREE.PlaneGeometry(56, 22),
      new THREE.MeshBasicMaterial({ map: skyTex }),
    );
    sky.position.set(0, 8.5, -12);
    this.root.add(sky);

    // Soft ground fog strip so horizon blends
    const fog = new THREE.Mesh(
      new THREE.PlaneGeometry(56, 4),
      new THREE.MeshBasicMaterial({
        color: 0x0a1228,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      }),
    );
    fog.position.set(0, 1.4, -11.5);
    this.root.add(fog);
  }

  private addHorizonSilhouette(): void {
    // City / tree skyline — cheap depth behind stage
    const sil = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 5.5),
      new THREE.MeshBasicMaterial({
        map: makeSkylineTexture(),
        transparent: true,
        depthWrite: false,
      }),
    );
    sil.position.set(0, 2.4, -10.2);
    this.root.add(sil);

    // Side tree clumps so edges aren't empty
    for (const x of [-14, -11, 11, 14] as const) {
      const tree = new THREE.Mesh(
        new THREE.ConeGeometry(1.4 + Math.abs(x) * 0.02, 4.2, 7),
        new THREE.MeshStandardMaterial({
          color: 0x0c1810,
          roughness: 1,
          flatShading: true,
        }),
      );
      tree.position.set(x, 2.0, -7.5 - (Math.abs(x) - 11) * 0.3);
      this.root.add(tree);
    }
  }

  private addDanceFloor(): void {
    // Flat LED pads under/around crowd — no height, won't cover faces
    const colors = [0xff2d8a, 0x2de0ff, 0xb06bff, 0xffe066, 0xff8a4a, 0x7CFF6B];
    let i = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 6; c++) {
        const mat = new THREE.MeshStandardMaterial({
          color: 0x101018,
          emissive: colors[i % colors.length],
          emissiveIntensity: 0.5,
          roughness: 0.2,
          metalness: 0.55,
        });
        const tile = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 1.15), mat);
        tile.rotation.x = -Math.PI / 2;
        tile.position.set(-2.9 + c * 1.2, 0.025, -1.5 + r * 1.25);
        this.floorTiles.push(tile);
        this.root.add(tile);
        i++;
      }
    }
  }

  private addFestoon(): void {
    const bulb = new THREE.PointLight(0xffc080, 2.0, 18, 2);
    bulb.position.set(0, 6.8, -2);
    this.festoonLights.push(bulb);
    this.root.add(bulb);

    const cable = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 11, 6),
      new THREE.MeshStandardMaterial({ color: 0x222018 }),
    );
    cable.rotation.z = Math.PI / 2;
    cable.position.set(0, 7.2, -8.0);
    this.root.add(cable);

    const lampMat = new THREE.MeshStandardMaterial({
      color: 0xffd090,
      emissive: 0xffa040,
      emissiveIntensity: 0.85,
    });
    this.neonMats.push(lampMat);
    for (let i = -4; i <= 4; i++) {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), lampMat);
      lamp.position.set(i * 1.25, 7.05, -8.0);
      this.root.add(lamp);
    }
  }

  private addNeonProps(): void {
    // One clean banner — not stacked ugly text
    const meme = makeSign("OPEN AIR", 0, 7.6, -8.6, 0xff8a4a, 5.5);
    this.neonSigns.push(meme);
    this.root.add(meme);
  }

  private addSparkles(): THREE.Points {
    const count = 90;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = 0.6 + Math.random() * 6;
      pos[i * 3 + 2] = -1 + (Math.random() - 0.5) * 6;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: 0xffe8c0,
        size: 0.09,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.root.add(pts);
    return pts;
  }
}

function makeFestivalSkyTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 512;
  const ctx = c.getContext("2d")!;

  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, "#050816");
  g.addColorStop(0.35, "#121a3a");
  g.addColorStop(0.62, "#2a1848");
  g.addColorStop(0.82, "#4a2040");
  g.addColorStop(1, "#1a1028");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 1024, 512);

  // Festival glow blobs
  for (const [x, y, r, col] of [
    [320, 380, 180, "rgba(255,80,160,0.28)"],
    [700, 360, 200, "rgba(60,180,255,0.22)"],
    [512, 420, 240, "rgba(255,140,60,0.18)"],
  ] as const) {
    const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, col);
    rg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, 1024, 512);
  }

  // Stars
  for (let i = 0; i < 180; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 280;
    const a = 0.35 + Math.random() * 0.65;
    const s = Math.random() * 1.8 + 0.4;
    ctx.fillStyle = `rgba(255,255,255,${a})`;
    ctx.fillRect(x, y, s, s);
  }

  // Soft moon
  const moon = ctx.createRadialGradient(820, 90, 0, 820, 90, 42);
  moon.addColorStop(0, "rgba(255,244,210,0.95)");
  moon.addColorStop(0.5, "rgba(255,230,180,0.55)");
  moon.addColorStop(1, "rgba(255,230,180,0)");
  ctx.fillStyle = moon;
  ctx.beginPath();
  ctx.arc(820, 90, 42, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function makeSkylineTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 160;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, 1024, 160);
  ctx.fillStyle = "#060a14";

  // Buildings
  let x = 0;
  while (x < 1024) {
    const w = 28 + Math.random() * 55;
    const h = 40 + Math.random() * 100;
    ctx.fillRect(x, 160 - h, w, h);
    // windows
    ctx.fillStyle = Math.random() > 0.5 ? "#ffb060" : "#7ad0ff";
    for (let wy = 160 - h + 8; wy < 150; wy += 12) {
      for (let wx = x + 6; wx < x + w - 6; wx += 10) {
        if (Math.random() > 0.55) ctx.fillRect(wx, wy, 3, 4);
      }
    }
    ctx.fillStyle = "#060a14";
    x += w + 4;
  }

  // Tree bumps on sides
  ctx.fillStyle = "#08140c";
  for (const cx of [40, 90, 930, 980] as const) {
    ctx.beginPath();
    ctx.moveTo(cx, 160);
    ctx.lineTo(cx - 35, 160);
    ctx.lineTo(cx, 70 + Math.random() * 30);
    ctx.lineTo(cx + 35, 160);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function makeGrassTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#4a8a42";
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1200; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.fillStyle = Math.random() > 0.5 ? "#6ab058" : "#3a7038";
    ctx.fillRect(x, y, 2, 3 + Math.random() * 4);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function makeDirtTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#7a6040";
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 800; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? "#9a7850" : "#5a4428";
    ctx.fillRect(Math.random() * 256, Math.random() * 256, 3, 3);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function makeSign(
  text: string,
  x: number,
  y: number,
  z: number,
  color: number,
  scaleX: number,
): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 140;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Sprite(new THREE.SpriteMaterial({ color }));
  const hex = `#${color.toString(16).padStart(6, "0")}`;
  ctx.clearRect(0, 0, 640, 140);
  ctx.shadowColor = hex;
  ctx.shadowBlur = 28;
  ctx.fillStyle = hex;
  ctx.font = "bold 64px Impact, Arial Black, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 320, 72);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  s.position.set(x, y, z);
  s.scale.set(scaleX, scaleX * 0.24, 1);
  return s;
}

function makeStreakSign(
  line1: string,
  line2: string,
  x: number,
  y: number,
  z: number,
  scaleX: number,
): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 180;
  paintStreak(canvas, line1, line2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  s.position.set(x, y, z);
  s.scale.set(scaleX, scaleX * 0.28, 1);
  return s;
}

function redrawStreakSign(
  sprite: THREE.Sprite,
  line1: string,
  line2: string,
): void {
  const mat = sprite.material as THREE.SpriteMaterial;
  const old = mat.map;
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 180;
  paintStreak(canvas, line1, line2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  mat.map = tex;
  mat.opacity = 1;
  mat.needsUpdate = true;
  old?.dispose();
}

function paintStreak(
  canvas: HTMLCanvasElement,
  line1: string,
  line2: string,
): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, 768, 180);
  ctx.shadowColor = "#FF8A4A";
  ctx.shadowBlur = 22;
  ctx.fillStyle = "#FFB060";
  ctx.font = "bold 56px Impact, Arial Black, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(line1.slice(0, 22), 384, 70);
  ctx.fillStyle = "#FFE8A0";
  ctx.font = "bold 36px Segoe UI, sans-serif";
  ctx.fillText(line2.slice(0, 20), 384, 130);
}
