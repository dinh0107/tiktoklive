import type { CharacterPosition } from "./character.types";

/** Sprite ~1.7 wide — keep this gap so bodies don't stack. */
const MIN_SEP = 1.95;

/** Open floor in front of stage (stage ~ z=-5.4). */
const AREA = {
  xMin: -5.4,
  xMax: 5.4,
  zMin: -1.7,
  zMax: 2.6,
};

/**
 * Random crowd spot that stays ≥ MIN_SEP from everyone already placed.
 */
export function pickCrowdSlot(
  occupied: CharacterPosition[],
): CharacterPosition {
  for (let i = 0; i < 80; i++) {
    const pos = randomInArea();
    if (fits(pos, occupied)) return pos;
  }
  // Fallback: spiral out from a random seed until free
  const seed = randomInArea();
  for (let ring = 1; ring <= 12; ring++) {
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + ring * 0.35;
      const pos = {
        x: clamp(seed.x + Math.cos(a) * ring * 0.55, AREA.xMin, AREA.xMax),
        y: 0,
        z: clamp(seed.z + Math.sin(a) * ring * 0.55, AREA.zMin, AREA.zMax),
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
  const r = 1.2 + (index % 7) * 0.45;
  const a = index * golden;
  return {
    x: clamp(Math.cos(a) * r * 2.2, AREA.xMin, AREA.xMax),
    y: 0,
    z: clamp(Math.sin(a) * r * 1.1 + 0.4, AREA.zMin, AREA.zMax),
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
