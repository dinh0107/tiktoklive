import * as THREE from "three";
import { textureForSeed } from "../characters/characterArt";
import type { DonorScore } from "../gifts/DonorLeaderboard";

/**
 * LED wall behind the DJ stage — shows session top donor.
 */
export class TopDonorScreen {
  readonly root = new THREE.Group();

  private readonly screenMat: THREE.MeshBasicMaterial;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly tex: THREE.CanvasTexture;
  private flashUntil = 0;

  constructor() {
    this.root.name = "TopDonorScreen";
    // Behind stage (booth at z≈-5.4)
    this.root.position.set(0, 0, -8.2);

    this.canvas = document.createElement("canvas");
    this.canvas.width = 768;
    this.canvas.height = 432;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) throw new Error("2D canvas unavailable");
    this.ctx = ctx;

    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.screenMat = new THREE.MeshBasicMaterial({
      map: this.tex,
      toneMapped: false,
    });

    this.addFrame();
    this.addScreen();
    this.addLabel();
    this.paintIdle();
  }

  update(time: number): void {
    if (performance.now() < this.flashUntil) {
      const pulse = 0.55 + Math.sin(time * 14) * 0.45;
      this.screenMat.opacity = 1;
      this.screenMat.color.setRGB(1, pulse, pulse);
    } else {
      this.screenMat.color.setRGB(1, 1, 1);
    }
  }

  /** Show / refresh the current #1 donor. */
  showDonor(donor: DonorScore, flash = true): void {
    this.paintDonor(donor);
    if (flash) this.flashUntil = performance.now() + 2200;
  }

  private addFrame(): void {
    const bezel = new THREE.Mesh(
      new THREE.BoxGeometry(7.4, 4.3, 0.25),
      new THREE.MeshStandardMaterial({
        color: 0x121018,
        metalness: 0.55,
        roughness: 0.35,
      }),
    );
    bezel.position.set(0, 4.6, -0.05);
    this.root.add(bezel);

    const glow = new THREE.Mesh(
      new THREE.BoxGeometry(7.55, 4.45, 0.06),
      new THREE.MeshStandardMaterial({
        color: 0xff2d8a,
        emissive: 0xff2d8a,
        emissiveIntensity: 0.7,
      }),
    );
    glow.position.set(0, 4.6, -0.18);
    this.root.add(glow);
  }

  private addScreen(): void {
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(6.8, 3.8),
      this.screenMat,
    );
    screen.position.set(0, 4.6, 0.1);
    this.root.add(screen);
  }

  private addLabel(): void {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 96;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, 512, 96);
    ctx.shadowColor = "#FF8A4A";
    ctx.shadowBlur = 18;
    ctx.fillStyle = "#FFB060";
    ctx.font = "bold 48px Impact, Arial Black, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("TOP DONOR", 256, 50);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const spr = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    spr.position.set(0, 7.15, 0.2);
    spr.scale.set(4.2, 0.8, 1);
    this.root.add(spr);
  }

  private paintIdle(): void {
    const { ctx, canvas } = this;
    ctx.fillStyle = "#0a0614";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const g = ctx.createRadialGradient(384, 220, 20, 384, 220, 280);
    g.addColorStop(0, "#2a1840");
    g.addColorStop(1, "#0a0614");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FF8A4A";
    ctx.font = "bold 42px Impact, Arial Black, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("WAITING FOR KING…", 384, 200);
    ctx.fillStyle = "#9aa0b8";
    ctx.font = "24px Segoe UI, sans-serif";
    ctx.fillText("Ai donate nhiều nhất sẽ lên đây", 384, 250);
    this.tex.needsUpdate = true;
  }

  private paintDonor(donor: DonorScore): void {
    const { ctx, canvas } = this;
    ctx.fillStyle = "#0c0820";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Neon border
    ctx.strokeStyle = "#FF4FA3";
    ctx.lineWidth = 10;
    ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);
    ctx.strokeStyle = "#2DE0FF";
    ctx.lineWidth = 3;
    ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);

    // Portrait from character art
    try {
      const seed = hash(donor.characterId);
      const src = textureForSeed(seed).image as HTMLCanvasElement | ImageBitmap;
      const pw = 220;
      const ph = 280;
      const px = 60;
      const py = 70;
      ctx.save();
      ctx.beginPath();
      roundRect(ctx, px, py, pw, ph, 18);
      ctx.clip();
      ctx.fillStyle = "#1a1030";
      ctx.fillRect(px, py, pw, ph);
      ctx.drawImage(src as CanvasImageSource, px - 10, py - 10, pw + 20, ph + 40);
      ctx.restore();
      ctx.strokeStyle = "#FFE066";
      ctx.lineWidth = 4;
      roundRect(ctx, px, py, pw, ph, 18);
      ctx.stroke();
    } catch {
      ctx.fillStyle = "#2a1840";
      ctx.fillRect(60, 70, 220, 280);
    }

    // Text
    ctx.textAlign = "left";
    ctx.fillStyle = "#FF8A4A";
    ctx.font = "bold 28px Impact, Arial Black, sans-serif";
    ctx.fillText("#1 DONOR", 320, 110);

    ctx.fillStyle = "#FFF8EE";
    ctx.font = "bold 48px Segoe UI, sans-serif";
    const name = `@${donor.username}`.slice(0, 16);
    ctx.fillText(name, 320, 175);

    ctx.fillStyle = "#2DE0FF";
    ctx.font = "bold 56px Impact, Arial Black, sans-serif";
    ctx.fillText(`${formatDiamonds(donor.diamonds)} 💎`, 320, 255);

    ctx.fillStyle = "#c8c0d8";
    ctx.font = "22px Segoe UI, sans-serif";
    ctx.fillText("Session total", 320, 300);

    this.tex.needsUpdate = true;
  }
}

function formatDiamonds(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return String(n);
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
