import type { CharacterPosition } from "./character.types";

/** Sprite ~1.7 wide — keep this gap so bodies don't stack. */
const MIN_SEP = 2.55;

/** Wider open floor so demo guests spread out. */
const AREA = {
  xMin: -7.2,
  xMax: 7.2,
  zMin: -2.0,
  zMax: 3.4,
};

/**
 * Random crowd spot that stays ≥ MIN_SEP from everyone already placed.
 */
export function pickCrowdSlot(
  occupied: CharacterPosition[],
): CharacterPosition {
  for (let i = 0; i < 120; i++) {
    const pos = randomInArea();
    if (fits(pos, occupied)) return pos;
  }
  // Fallback: spiral out from a random seed until free
  const seed = randomInArea();
  for (let ring = 1; ring <= 16; ring++) {
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2 + ring * 0.4;
      const pos = {
        x: clamp(seed.x + Math.cos(a) * ring * 0.7, AREA.xMin, AREA.xMax),
        y: 0,
        z: clamp(seed.z + Math.sin(a) * ring * 0.7, AREA.zMin, AREA.zMax),
      };
      if (fits(pos, occupied)) return pos;
    }
  }
  return seed;
}

/** @deprecated Prefer pickCrowdSlot(occupied) — kept for extras / tests. */
export function slotForIndex(index: number): CharacterPosition {
  // Deterministic-ish scatter so old callers still spread out
  const golden = 2.399963;
  const r = 1.6 + (index % 8) * 0.55;
  const a = index * golden;
  return {
    x: clamp(Math.cos(a) * r * 2.8, AREA.xMin, AREA.xMax),
    y: 0,
    z: clamp(Math.sin(a) * r * 1.35 + 0.5, AREA.zMin, AREA.zMax),
  };
}

export function isDanceFloorSlot(_position: CharacterPosition): boolean {
  return true;
}

function randomInArea(): CharacterPosition {
  return {
    x: AREA.xMin + Math.random() * (AREA.xMax - AREA.xMin),
    y: 0,
    z: AREA.zMin + Math.random() * (AREA.zMax - AREA.zMin),
  };
}

function fits(pos: CharacterPosition, occupied: CharacterPosition[]): boolean {
  for (const o of occupied) {
    if (distXZ(o, pos) < MIN_SEP) return false;
  }
  return true;
}

function distXZ(a: CharacterPosition, b: CharacterPosition): number {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return Math.hypot(dx, dz);
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}
