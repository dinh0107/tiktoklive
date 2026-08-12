import * as THREE from "three";
import type { GiftEffectPlan } from "./gift.types";
import { MAX_PARTICLE_BURSTS } from "../perf";

export type ParticleKind = Exclude<GiftEffectPlan["particle"], "none">;

interface Burst {
  points: THREE.Points;
  velocities: Float32Array;
  life: Float32Array;
  maxLife: Float32Array;
  age: number;
  duration: number;
  kind: ParticleKind;
  baseSize: number;
}

const MAX_BURSTS = MAX_PARTICLE_BURSTS;

/**
 * Lightweight Three.js Points bursts — no DOM particles.
 */
export class GiftParticles {
  readonly root = new THREE.Group();
  private readonly bursts: Burst[] = [];
  private readonly heartTex: THREE.Texture;
  private readonly sparkleTex: THREE.Texture;
  private readonly starTex: THREE.Texture;

  constructor() {
    this.root.name = "GiftParticles";
    this.heartTex = makeHeartTexture();
    this.sparkleTex = makeGlowTexture("#ffe8a0");
    this.starTex = makeStarTexture();
  }

  spawn(
    kind: ParticleKind,
    origin: THREE.Vector3,
    opts?: { intensity?: number },
  ): void {
    while (this.bursts.length >= MAX_BURSTS) {
      this.disposeBurst(this.bursts.shift()!);
    }

    const intensity = Math.min(2, opts?.intensity ?? 1);
    const count = Math.floor(countFor(kind) * intensity);
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const life = new Float32Array(count);
    const maxLife = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = origin.x + (Math.random() - 0.5) * 0.25;
      positions[i3 + 1] = origin.y + 1.2 + Math.random() * 0.4;
      positions[i3 + 2] = origin.z + (Math.random() - 0.5) * 0.25;

      const v = velocityFor(kind);
      velocities[i3] = v.x;
      velocities[i3 + 1] = v.y;
      velocities[i3 + 2] = v.z;

      const ml = lifeFor(kind);
      maxLife[i] = ml;
      life[i] = ml;

      const c = colorFor(kind, i);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      map: this.textureFor(kind),
      vertexColors: true,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      size: sizeFor(kind),
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    this.root.add(points);

    this.bursts.push({
      points,
      velocities,
      life,
      maxLife,
      age: 0,
      duration: durationFor(kind),
      kind,
      baseSize: sizeFor(kind),
    });
  }

  update(dt: number): void {
    for (let b = this.bursts.length - 1; b >= 0; b--) {
      const burst = this.bursts[b]!;
      burst.age += dt;
      const pos = burst.points.geometry.attributes.position!
        .array as Float32Array;
      const n = burst.life.length;
      let alive = 0;

      for (let i = 0; i < n; i++) {
        burst.life[i]! -= dt;
        if (burst.life[i]! <= 0) {
          pos[i * 3 + 1] = -999;
          continue;
        }
        alive++;
        const i3 = i * 3;
        pos[i3]! += burst.velocities[i3]! * dt;
        pos[i3 + 1]! += burst.velocities[i3 + 1]! * dt;
        pos[i3 + 2]! += burst.velocities[i3 + 2]! * dt;

        // Per-kind motion tweak
        if (burst.kind === "hearts") {
          burst.velocities[i3]! += Math.sin(burst.age * 6 + i) * 0.8 * dt;
          burst.velocities[i3 + 1]! += 0.6 * dt; // float up
        } else if (burst.kind === "burst") {
          burst.velocities[i3 + 1]! -= 4.5 * dt; // gravity
        } else if (burst.kind === "stars") {
          burst.velocities[i3]! *= 1 - 0.4 * dt;
          burst.velocities[i3 + 2]! *= 1 - 0.4 * dt;
          burst.velocities[i3 + 1]! += 0.35 * dt;
        } else {
          burst.velocities[i3 + 1]! -= 1.2 * dt;
        }
      }

      burst.points.geometry.attributes.position!.needsUpdate = true;
      const mat = burst.points.material as THREE.PointsMaterial;
      const fade = 1 - burst.age / burst.duration;
      mat.opacity = Math.max(0, fade);
      if (burst.kind === "stars" || burst.kind === "sparkles") {
        mat.size =
          burst.baseSize * (0.7 + Math.sin(burst.age * 14) * 0.3);
      }

      if (burst.age >= burst.duration || alive === 0) {
        this.bursts.splice(b, 1);
        this.disposeBurst(burst);
      }
    }
  }

  dispose(): void {
    while (this.bursts.length) this.disposeBurst(this.bursts.pop()!);
    this.heartTex.dispose();
    this.sparkleTex.dispose();
    this.starTex.dispose();
  }

  private textureFor(kind: ParticleKind): THREE.Texture {
    if (kind === "hearts") return this.heartTex;
    if (kind === "stars") return this.starTex;
    return this.sparkleTex;
  }

  private disposeBurst(burst: Burst): void {
    this.root.remove(burst.points);
    burst.points.geometry.dispose();
    (burst.points.material as THREE.PointsMaterial).dispose();
  }
}

function countFor(kind: ParticleKind): number {
  switch (kind) {
    case "hearts":
      return 22;
    case "sparkles":
      return 32;
    case "burst":
      return 48;
    case "stars":
      return 40;
  }
}

function sizeFor(kind: ParticleKind): number {
  switch (kind) {
    case "hearts":
      return 0.45;
    case "sparkles":
      return 0.28;
    case "burst":
      return 0.35;
    case "stars":
      return 0.4;
  }
}

function durationFor(kind: ParticleKind): number {
  switch (kind) {
    case "hearts":
      return 2.2;
    case "sparkles":
      return 1.8;
    case "burst":
      return 2.0;
    case "stars":
      return 2.8;
  }
}

function lifeFor(kind: ParticleKind): number {
  const base = durationFor(kind);
  return base * (0.55 + Math.random() * 0.45);
}

function velocityFor(kind: ParticleKind): THREE.Vector3 {
  const rnd = () => Math.random() - 0.5;
  switch (kind) {
    case "hearts":
      return new THREE.Vector3(rnd() * 0.8, 1.2 + Math.random() * 1.2, rnd() * 0.8);
    case "sparkles":
      return new THREE.Vector3(rnd() * 2.2, 1.5 + Math.random() * 2, rnd() * 2.2);
    case "burst":
      return new THREE.Vector3(rnd() * 5, 2 + Math.random() * 4, rnd() * 5);
    case "stars":
      return new THREE.Vector3(rnd() * 1.4, 0.6 + Math.random() * 1.5, rnd() * 1.4);
  }
}

function colorFor(kind: ParticleKind, i: number): THREE.Color {
  switch (kind) {
    case "hearts":
      return new THREE.Color(i % 3 === 0 ? 0xff6aad : 0xff3355);
    case "sparkles":
      return new THREE.Color(i % 2 === 0 ? 0xffe8a0 : 0xffffff);
    case "burst": {
      const palette = [0xff4fa3, 0x2de0ff, 0xffe066, 0xff8a4a, 0xb06bff];
      return new THREE.Color(palette[i % palette.length]);
    }
    case "stars":
      return new THREE.Color(i % 4 === 0 ? 0xa8e0ff : 0xffffff);
  }
}

function makeHeartTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, 64, 64);
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  const x = 32;
  const y = 30;
  ctx.moveTo(x, y + 12);
  ctx.bezierCurveTo(x, y + 4, x - 18, y - 2, x - 18, y - 10);
  ctx.bezierCurveTo(x - 18, y - 20, x - 4, y - 20, x, y - 12);
  ctx.bezierCurveTo(x + 4, y - 20, x + 18, y - 20, x + 18, y - 10);
  ctx.bezierCurveTo(x + 18, y - 2, x, y + 4, x, y + 12);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeGlowTexture(hex: string): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  g.addColorStop(0, hex);
  g.addColorStop(0.35, hex);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeStarTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, 64, 64);
  ctx.translate(32, 32);
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
    const ox = Math.cos(angle) * 14;
    const oy = Math.sin(angle) * 14;
    const ix = Math.cos(angle + Math.PI / 5) * 6;
    const iy = Math.sin(angle + Math.PI / 5) * 6;
    if (i === 0) ctx.moveTo(ox, oy);
    else ctx.lineTo(ox, oy);
    ctx.lineTo(ix, iy);
  }
  ctx.closePath();
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.globalCompositeOperation = "destination-over";
  const g = ctx.createRadialGradient(0, 0, 2, 0, 0, 28);
  g.addColorStop(0, "rgba(255,255,255,0.8)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, 28, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
