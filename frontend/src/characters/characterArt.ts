import * as THREE from "three";
import { CHAR_TEX_MAX } from "../perf";

const CHAR_URLS = [
  "/characters/char_01.png",
  "/characters/char_02.png",
  "/characters/char_03.png",
  "/characters/char_04.png",
  "/characters/char_05.png",
  "/characters/char_06.png",
  "/characters/char_07.png",
  "/characters/char_08.png",
];

const ACCENTS = [
  "#FF3D7A",
  "#3D9FFF",
  "#B06BFF",
  "#FFB020",
  "#2EE6A6",
  "#FF4D6D",
  "#FFE14A",
  "#5CE1FF",
];

let textures: THREE.CanvasTexture[] = [];
let bodyMaterials: THREE.SpriteMaterial[] = [];
let djTexture: THREE.CanvasTexture | null = null;
let ready = false;

export function isCharacterArtReady(): boolean {
  return ready;
}

export function textureForSeed(seed: number): THREE.CanvasTexture {
  if (!ready || textures.length === 0) {
    throw new Error("Character art not preloaded");
  }
  return textures[seed % textures.length]!;
}

export function materialForSeed(seed: number): THREE.SpriteMaterial {
  if (!ready || bodyMaterials.length === 0) {
    throw new Error("Character art not preloaded");
  }
  return bodyMaterials[seed % bodyMaterials.length]!;
}

export function accentForSeed(seed: number): string {
  return ACCENTS[seed % ACCENTS.length]!;
}

export function getDjTexture(): THREE.CanvasTexture {
  if (!djTexture) {
    throw new Error("DJ art not preloaded");
  }
  return djTexture;
}

export async function preloadCharacterArt(): Promise<void> {
  if (ready) return;

  const loaded: HTMLImageElement[] = [];
  for (const url of CHAR_URLS) {
    try {
      loaded.push(await loadImage(url));
    } catch (err) {
      console.error(`[CHARACTER] missing art ${url}`, err);
    }
  }
  if (loaded.length === 0) {
    throw new Error("No character PNGs found in /public/characters/");
  }
  textures = loaded.map((img) => chromaKeyTexture(img));
  bodyMaterials = textures.map(
    (map) =>
      new THREE.SpriteMaterial({
        map,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        alphaTest: 0.08,
      }),
  );

  try {
    const djImg = await loadImage("/characters/dj.png");
    djTexture = chromaKeyTexture(djImg);
  } catch (err) {
    console.error("[CHARACTER] missing dj.png — using first patron", err);
    djTexture = textures[0]!;
  }

  ready = true;
  console.log(
    `[CHARACTER] loaded ${textures.length} patrons + DJ (<=${CHAR_TEX_MAX}px)`,
  );
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${url}`));
    img.src = url;
  });
}

function chromaKeyTexture(img: HTMLImageElement): THREE.CanvasTexture {
  const srcW = img.naturalWidth || img.width;
  const srcH = img.naturalHeight || img.height;
  const scale = Math.min(1, CHAR_TEX_MAX / Math.max(srcW, srcH));
  const w = Math.max(1, Math.round(srcW * scale));
  const h = Math.max(1, Math.round(srcH * scale));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) {
    throw new Error("2D canvas unavailable");
  }
  ctx.drawImage(img, 0, 0, w, h);
  const frame = ctx.getImageData(0, 0, w, h);
  const d = frame.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i]!;
    const g = d[i + 1]!;
    const b = d[i + 2]!;
    const maxRB = Math.max(r, b);
    if (g > 90 && g > maxRB * 1.35 && g - maxRB > 30) {
      d[i + 3] = 0;
      continue;
    }
    if (g > 70 && g > maxRB * 1.15 && g - maxRB > 18) {
      const t = Math.min(1, (g - maxRB - 18) / 40);
      d[i + 3] = Math.round(d[i + 3]! * (1 - t));
    }
  }

  ctx.putImageData(frame, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 1;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}
