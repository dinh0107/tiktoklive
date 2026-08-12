import type { Server, Socket } from "socket.io";
import type { Character } from "../characters/character.types.js";
import type { CharacterService } from "../characters/character.service.js";
import type { GiftReceivedPayload } from "../gifts/gift.types.js";

export type TikTokConnectionStatus = "disconnected" | "connecting" | "connected" | "error";

export class SocketService {
  private io: Server | null = null;
  private characters: CharacterService | null = null;
  private tiktokStatus: TikTokConnectionStatus = "disconnected";
  private viewerCount = 0;

  attach(io: Server, characters: CharacterService): void {
    this.io = io;
    this.characters = characters;

    io.on("connection", (socket: Socket) => {
      console.log(`[SOCKET] client connected ${socket.id}`);
      this.pushSnapshot(socket);

      socket.on("disconnect", (reason) => {
        console.log(`[SOCKET] client disconnected ${socket.id} (${reason})`);
      });
    });
  }

  setTikTokStatus(status: TikTokConnectionStatus, detail?: string): void {
    this.tiktokStatus = status;
    this.io?.emit("tiktok:status", { status, detail: detail ?? null });
  }

  emitViewerUpdate(count: number): void {
    this.viewerCount = count;
    this.io?.emit("viewer:update", { type: "viewer:update", count });
  }

  emitViewerJoin(user: { userId: string; username: string }, character: Character): void {
    console.log(`[VIEWER] @${user.username} joined`);
    this.io?.emit("viewer:join", {
      type: "viewer:join",
      user,
      character: publicCharacter(character),
    });
    this.emitCharacterAssign(character);
  }

  emitViewerLeave(userId: string, username: string): void {
    this.io?.emit("viewer:leave", {
      type: "viewer:leave",
      userId,
      username,
    });
  }

  emitCharacterAssign(character: Character): void {
    this.io?.emit("character:assign", {
      type: "character:assign",
      character: publicCharacter(character),
    });
  }

  emitGiftReceived(payload: GiftReceivedPayload): void {
    this.io?.emit("gift:received", payload);
  }

  emitGiftProcessed(giftName: string, username: string): void {
    this.io?.emit("gift:processed", {
      type: "gift:processed",
      giftName,
      username,
    });
  }

  getStatus(): {
    tiktok: TikTokConnectionStatus;
    viewers: number;
    characters: number;
  } {
    return {
      tiktok: this.tiktokStatus,
      viewers: this.viewerCount,
      characters: this.characters?.count ?? 0,
    };
  }

  private pushSnapshot(socket: Socket): void {
    socket.emit("tiktok:status", {
      status: this.tiktokStatus,
      detail: null,
    });
    socket.emit("viewer:update", {
      type: "viewer:update",
      count: this.viewerCount,
    });
    const all = this.characters?.getAllCharacters() ?? [];
    for (const character of all) {
      socket.emit("character:assign", {
        type: "character:assign",
        character: publicCharacter(character),
      });
    }
  }
}

function publicCharacter(character: Character) {
  return {
    id: character.id,
    userId: character.userId,
    username: character.username,
    position: { ...character.position },
    state: character.state,
    type: character.type,
  };
}
