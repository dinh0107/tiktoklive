import type {
  AssignUser,
  Character,
  CharacterPosition,
} from "./character.types.js";

/** Backend source of truth for user → character mapping. */
export class CharacterService {
  private readonly byUserId = new Map<string, Character>();
  private readonly byUsername = new Map<string, Character>();
  private nextIndex = 0;

  get count(): number {
    return this.byUserId.size;
  }

  assignCharacter(user: AssignUser): Character {
    const existing = this.byUserId.get(user.userId);
    if (existing) {
      if (existing.state === "sleeping") existing.state = "idle";
      return existing;
    }

    const byName = this.byUsername.get(normalize(user.username));
    if (byName) return byName;

    this.nextIndex += 1;
    const occupied = [...this.byUserId.values()].map((c) => c.position);
    const character: Character = {
      id: `character_${String(this.nextIndex).padStart(3, "0")}`,
      userId: user.userId,
      username: user.username.replace(/^@/, ""),
      position: pickCrowdSlot(occupied),
      type: user.type ?? "placeholder",
      state: "idle",
    };

    this.byUserId.set(character.userId, character);
    this.byUsername.set(normalize(character.username), character);
    console.log(`[CHARACTER] @${character.username} → ${character.id}`);
    return character;
  }

  getCharacterByUserId(userId: string): Character | undefined {
    return this.byUserId.get(userId);
  }

  getCharacterByUsername(username: string): Character | undefined {
    return this.byUsername.get(normalize(username));
  }

  markAway(userId: string): void {
    const character = this.byUserId.get(userId);
    if (!character) return;
    character.state = "sleeping";
  }

  removeCharacter(userId: string): void {
    const character = this.byUserId.get(userId);
    if (!character) return;
    this.byUserId.delete(userId);
    this.byUsername.delete(normalize(character.username));
  }

  getAllCharacters(): Character[] {
    return [...this.byUserId.values()];
  }
}

function normalize(username: string): string {
  return username.replace(/^@/, "").toLowerCase();
}

function pickCrowdSlot(occupied: CharacterPosition[]): CharacterPosition {
  const MIN_SEP = 2.55;
  const AREA = { xMin: -7.2, xMax: 7.2, zMin: -2.0, zMax: 3.4 };

  const rand = (): CharacterPosition => ({
    x: AREA.xMin + Math.random() * (AREA.xMax - AREA.xMin),
    y: 0,
    z: AREA.zMin + Math.random() * (AREA.zMax - AREA.zMin),
  });

  const ok = (pos: CharacterPosition): boolean =>
    occupied.every(
      (o) => Math.hypot(o.x - pos.x, o.z - pos.z) >= MIN_SEP,
    );

  for (let i = 0; i < 120; i++) {
    const pos = rand();
    if (ok(pos)) return pos;
  }

  const seed = rand();
  for (let ring = 1; ring <= 16; ring++) {
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2 + ring * 0.4;
      const pos: CharacterPosition = {
        x: Math.max(
          AREA.xMin,
          Math.min(AREA.xMax, seed.x + Math.cos(a) * ring * 0.7),
        ),
        y: 0,
        z: Math.max(
          AREA.zMin,
          Math.min(AREA.zMax, seed.z + Math.sin(a) * ring * 0.7),
        ),
      };
      if (ok(pos)) return pos;
    }
  }
  return seed;
}
