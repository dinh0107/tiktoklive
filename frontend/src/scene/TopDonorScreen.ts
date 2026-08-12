import * as THREE from "three";
import { textureForSeed } from "../characters/characterArt";
import type { DonorScore } from "../gifts/DonorLeaderboard";

/**
 * LED wall behind the DJ stage — shows session top donor.
 */
export class TopDonorScreen {
  readonly root = new THREE.Group();

  private readonly screenMat: THREE.MeshBasicMaterial;
  private readonly frameGlowMat: THREE.MeshStandardMaterial;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly tex: THREE.CanvasTexture;
  private flashUntil = 0;
  private activeDonor: DonorScore | null = null;

  constructor() {
    this.root.name = "TopDonorScreen";
    // Big LED wall behind stage
    this.root.position.set(0, 0.15, -7.85);

    this.canvas = document.createElement("canvas");
    this.canvas.width = 1280;
    this.canvas.height = 720;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) throw new Error("2D canvas unavailable");
    this.ctx = ctx;

    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.generateMipmaps = false;
    this.tex.minFilter = THREE.LinearFilter;
    this.tex.magFilter = THREE.LinearFilter;

    this.screenMat = new THREE.MeshBasicMaterial({
      map: this.tex,
      toneMapped: false,
      depthWrite: true,
      depthTest: true,
    });

    this.frameGlowMat = new THREE.MeshStandardMaterial({
      color: 0xff2d8a,
      emissive: 0xff2d8a,
      emissiveIntensity: 0.75,
    });

    this.addFrame();
    this.addScreen();
    this.paintIdle();
  }

  update(time: number): void {
    if (performance.now() < this.flashUntil) {
      this.frameGlowMat.emissiveIntensity = 1.2 + Math.sin(time * 16) * 0.8;
    } else {
      this.frameGlowMat.emissiveIntensity = 0.65 + Math.sin(time * 3) * 0.15;
    }
  }

  showDonor(donor: DonorScore, flash = true): void {
    this.activeDonor = donor;
    this.paintDonor(donor);
    if (flash) this.flashUntil = performance.now() + 2500;
  }

  hasDonor(): boolean {
    return this.activeDonor !== null;
  }

  private addFrame(): void {
    // Wide but shorter — leaves room for disco above, booth below
    const bezel = new THREE.Mesh(
      new THREE.BoxGeometry(10.2, 4.6, 0.28),
      new THREE.MeshStandardMaterial({
        color: 0x101018,
        metalness: 0.6,
        roughness: 0.3,
      }),
    );
    bezel.position.set(0, 4.15, -0.08);
    bezel.renderOrder = 1;
    this.root.add(bezel);

    const glow = new THREE.Mesh(
      new THREE.BoxGeometry(10.4, 4.8, 0.06),
      this.frameGlowMat,
    );
    glow.position.set(0, 4.15, -0.2);
    this.root.add(glow);
  }

  private addScreen(): void {
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(9.5, 4.15),
      this.screenMat,
    );
    screen.position.set(0, 4.15, 0.1);
    screen.renderOrder = 2;
    this.root.add(screen);
  }

  private paintIdle(): void {
    const { ctx, canvas } = this;
    paintBackground(ctx, canvas.width, canvas.height);

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FF8A4A";
    ctx.font = "bold 72px Impact, Arial Black, sans-serif";
    ctx.fillText("TOP DONOR", canvas.width / 2, canvas.height / 2 - 48);

    ctx.fillStyle = "#A8B0C8";
    ctx.font = "36px Segoe UI, sans-serif";
    ctx.fillText(
      "Ai donate nhieu nhat se len day",
      canvas.width / 2,
      canvas.height / 2 + 36,
    );

    this.tex.needsUpdate = true;
  }

  private paintDonor(donor: DonorScore): void {
    const { ctx, canvas } = this;
    const w = canvas.width;
    const h = canvas.height;
    // Full wipe — no leftover idle / previous donor pixels
    ctx.clearRect(0, 0, w, h);
    paintBackground(ctx, w, h);

    ctx.fillStyle = "rgba(255, 77, 163, 0.22)";
    ctx.fillRect(0, 0, w, 88);
    ctx.fillStyle = "#FF8A4A";
    ctx.font = "bold 52px Impact, Arial Black, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("TOP DONOR", w / 2, 46);

    const boxX = 56;
    const boxY = 120;
    const boxW = 420;
    const boxH = 540;
    ctx.fillStyle = "#161022";
    roundFill(ctx, boxX, boxY, boxW, boxH, 28);

    try {
      const seed = hashId(donor.characterId);
      const src = textureForSeed(seed).image as CanvasImageSource;
      drawContain(ctx, src, boxX + 20, boxY + 20, boxW - 40, boxH - 40);
    } catch (err) {
      console.warn("[TOP DONOR] portrait failed", err);
      ctx.fillStyle = "#3a2860";
      ctx.font = "bold 32px Segoe UI, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("NO ART", boxX + boxW / 2, boxY + boxH / 2);
    }

    ctx.strokeStyle = "#FFE066";
    ctx.lineWidth = 6;
    roundStroke(ctx, boxX, boxY, boxW, boxH, 28);

    const tx = 540;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";

    ctx.fillStyle = "#9AA3C0";
    ctx.font = "bold 32px Segoe UI, sans-serif";
    ctx.fillText("#1 SESSION", tx, 180);

    ctx.fillStyle = "#FFF8EE";
    ctx.font = "bold 68px Segoe UI, sans-serif";
    ctx.fillText(`@${donor.username}`.slice(0, 14), tx, 270);

    ctx.fillStyle = "#2DE0FF";
    ctx.font = "bold 80px Impact, Arial Black, sans-serif";
    ctx.fillText(`${formatDiamonds(donor.diamonds)} DIA`, tx, 390);

    ctx.fillStyle = "#C8C0D8";
    ctx.font = "30px Segoe UI, sans-serif";
    ctx.fillText("Tong kim cuong session", tx, 455);

    this.tex.needsUpdate = true;
  }
}

function paintBackground(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
): void {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#1a1040");
  g.addColorStop(1, "#080612");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "#FF4FA3";
  ctx.lineWidth = 8;
  ctx.strokeRect(8, 8, w - 16, h - 16);
  ctx.strokeStyle = "#2DE0FF";
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, w - 40, h - 40);
}

function formatDiamonds(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return String(Math.round(n));
}

/** Must match Character.ts hash. */
function hashId(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function drawContain(
  ctx: CanvasRenderingContext2D,
  src: CanvasImageSource,
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  const anySrc = src as { width?: number; height?: number; naturalWidth?: number; naturalHeight?: number };
  const iw = Number(anySrc.naturalWidth ?? anySrc.width ?? 0);
  const ih = Number(anySrc.naturalHeight ?? anySrc.height ?? 0);
  if (!iw || !ih) return;

  const scale = Math.min(w / iw, h / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  const dx = x + (w - dw) / 2;
  const dy = y + (h - dh) / 2;
  ctx.drawImage(src, dx, dy, dw, dh);
}

function roundFill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  roundPath(ctx, x, y, w, h, r);
  ctx.fill();
}

function roundStroke(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  roundPath(ctx, x, y, w, h, r);
  ctx.stroke();
}

function roundPath(
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
