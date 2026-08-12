import type { Scene } from "three";
import { Character } from "./Character";
import type { CharacterData, CharacterPosition } from "./character.types";
import { pickCrowdSlot } from "./slots";
import { MAX_CHARACTERS } from "../perf";

export interface AssignUser {
  userId: string;
  username: string;
  type?: string;
}

export interface AssignOptions {
  spawn?: boolean;
  id?: string;
  position?: CharacterPosition;
}

export class CharacterManager {
  private readonly scene: Scene;
  private readonly byUserId = new Map<string, Character>();
  private readonly byUsername = new Map<string, Character>();
  private readonly byId = new Map<string, Character>();
  private nextIndex = 0;
  private readonly order: string[] = [];

  constructor(scene: Scene) {
    this.scene = scene;
  }

  get count(): number {
    return this.byUserId.size;
  }

  update(time: number): void {
    for (const character of this.byUserId.values()) {
      character.updateIdle(time);
    }
  }

  assignCharacter(user: AssignUser, options: AssignOptions = {}): Character {
    const existingById = this.byUserId.get(user.userId);
    if (existingById) {
      if (existingById.data.state === "sleeping") {
        existingById.setState("idle");
      }
      return existingById;
    }

    const existingByName = this.byUsername.get(normalizeName(user.username));
    if (existingByName) {
      console.log(
        `[CHARACTER] reuse @${existingByName.data.username} → ${existingByName.data.id}`,
      );
      return existingByName;
    }

    this.ensureCapacity();

    this.nextIndex += 1;
    const occupied = this.occupiedPositions();
    const slot =
      options.position && fitsAmong(options.position, occupied)
        ? options.position
        : pickCrowdSlot(occupied);

    const data: CharacterData = {
      id: options.id ?? `character_${String(this.nextIndex).padStart(3, "0")}`,
      userId: user.userId,
      username: user.username.replace(/^@/, ""),
      position: { ...slot },
      type: user.type ?? "placeholder",
      state: "idle",
    };

    const showNameTag = this.byUserId.size < 48;
    const character = new Character(data, { showNameTag });
    this.scene.add(character.root);
    this.byUserId.set(data.userId, character);
    this.byUsername.set(normalizeName(data.username), character);
    this.byId.set(data.id, character);
    this.order.push(data.userId);

    console.log(`[CHARACTER] @${data.username} → ${data.id}`);

    if (options.spawn !== false) {
      void character.playSpawn();
    } else {
      character.resumeIdle();
    }

    return character;
  }

  getCharacterByUserId(userId: string): Character | undefined {
    return this.byUserId.get(userId);
  }

  getCharacterByUsername(username: string): Character | undefined {
    return this.byUsername.get(normalizeName(username));
  }

  getCharacterById(id: string): Character | undefined {
    return this.byId.get(id);
  }

  markAway(userId: string): void {
    const character = this.byUserId.get(userId);
    if (!character) return;
    character.setState("sleeping");
    console.log(`[CHARACTER] @${character.data.username} away (sleeping)`);
  }

  removeCharacter(userId: string): void {
    const character = this.byUserId.get(userId);
    if (!character) return;
    this.byUserId.delete(userId);
    this.byUsername.delete(normalizeName(character.data.username));
    this.byId.delete(character.data.id);
    const idx = this.order.indexOf(userId);
    if (idx >= 0) this.order.splice(idx, 1);
    character.dispose();
  }

  getAllCharacters(): Character[] {
    return [...this.byUserId.values()];
  }

  seedPlaceholders(count: number, spawn = true): Character[] {
    const out: Character[] = [];
    for (let i = 0; i < count; i++) {
      out.push(
        this.assignCharacter(
          {
            userId: `demo_${i + 1}`,
            username: `guest_${i + 1}`,
          },
          { spawn },
        ),
      );
    }
    return out;
  }

  private occupiedPositions(): CharacterPosition[] {
    const out: CharacterPosition[] = [];
    for (const ch of this.byUserId.values()) {
      out.push(ch.data.position);
    }
    return out;
  }

  private ensureCapacity(): void {
    if (this.byUserId.size < MAX_CHARACTERS) return;

    for (const userId of this.order) {
      const ch = this.byUserId.get(userId);
      if (ch?.data.state === "sleeping") {
        console.warn(`[CHARACTER] cap ${MAX_CHARACTERS}: recycle sleeping`);
        this.removeCharacter(userId);
        return;
      }
    }

    const oldest = this.order[0];
    if (oldest) {
      console.warn(`[CHARACTER] cap ${MAX_CHARACTERS}: recycle oldest`);
      this.removeCharacter(oldest);
    }
  }
}

function normalizeName(username: string): string {
  return username.replace(/^@/, "").toLowerCase();
}

function fitsAmong(
  pos: CharacterPosition,
  occupied: CharacterPosition[],
): boolean {
  const min = 1.95;
  for (const o of occupied) {
    if (Math.hypot(o.x - pos.x, o.z - pos.z) < min) return false;
  }
  return true;
}

export function assertCharacterMapping(manager: CharacterManager): void {
  const a = manager.assignCharacter(
    { userId: "_assert_u1", username: "assert_alice" },
    { spawn: false },
  );
  const b = manager.assignCharacter(
    { userId: "_assert_u1", username: "assert_alice" },
    { spawn: false },
  );
  const c = manager.assignCharacter(
    { userId: "_assert_u2", username: "Assert_Alice" },
    { spawn: false },
  );

  if (a !== b) {
    throw new Error("assertCharacterMapping: same userId created duplicate");
  }
  if (a !== c) {
    throw new Error("assertCharacterMapping: same username created duplicate");
  }
  if (a.data.position.x !== b.data.position.x) {
    throw new Error("assertCharacterMapping: position drifted on re-assign");
  }

  manager.removeCharacter("_assert_u1");
  console.log("[CHARACTER] assert mapping OK");
}
