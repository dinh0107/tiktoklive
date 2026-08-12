import type { CharacterService } from "../characters/character.service.js";
import type { SocketService } from "../socket/socket.service.js";
import type { GiftEvent, GiftReceivedPayload } from "./gift.types.js";

/**
 * Domain gift entry — demo + TikTok both call processGift.
 * Camera/Three.js stay on frontend via Socket.IO.
 */
export class GiftService {
  private readonly characters: CharacterService;
  private readonly sockets: SocketService;
  private readonly seen = new Set<string>();

  constructor(characters: CharacterService, sockets: SocketService) {
    this.characters = characters;
    this.sockets = sockets;
  }

  processGift(raw: GiftEvent): GiftReceivedPayload | null {
    if (!raw.username || !raw.giftName) {
      console.warn("[GIFT] invalid event ignored", raw);
      return null;
    }

    const eventKey =
      raw.eventKey ??
      `${raw.userId}|${raw.giftId ?? raw.giftName}|${raw.repeatCount ?? 1}|${raw.repeatEnd ?? true}`;

    if (this.seen.has(eventKey)) {
      console.log("[GIFT] duplicate skipped", eventKey);
      return null;
    }
    this.seen.add(eventKey);
    if (this.seen.size > 1000) {
      const first = this.seen.values().next().value;
      if (first !== undefined) this.seen.delete(first);
    }

    const character = this.characters.assignCharacter({
      userId: raw.userId,
      username: raw.username,
    });

    const gift: GiftEvent = {
      ...raw,
      username: raw.username.replace(/^@/, ""),
      repeatCount: raw.repeatCount ?? 1,
      eventKey,
    };

    console.log(
      `[GIFT] @${gift.username} → ${gift.giftName} x${gift.repeatCount}`,
    );

    const payload: GiftReceivedPayload = {
      type: "gift:received",
      gift,
      character: {
        id: character.id,
        userId: character.userId,
        username: character.username,
        position: { ...character.position },
      },
    };

    this.sockets.emitGiftReceived(payload);
    this.sockets.emitCharacterAssign(character);
    return payload;
  }
}
