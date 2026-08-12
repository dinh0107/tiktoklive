import {
  ControlEvent,
  TikTokLiveConnection,
  WebcastEvent,
} from "tiktok-live-connector";
import type {
  TikTokChatEvent,
  TikTokGiftEvent,
  TikTokLiveService,
  TikTokUserEvent,
  TikTokViewerUpdateEvent,
} from "./tiktok.types.js";
import { extractGiftImageUrl } from "../gifts/giftImage.js";

type GiftCb = (gift: TikTokGiftEvent) => void;
type ChatCb = (chat: TikTokChatEvent) => void;
type ViewerCb = (update: TikTokViewerUpdateEvent) => void;
type UserCb = (user: TikTokUserEvent) => void;

/** Connector typings omit EventEmitter methods on the class export — bridge locally. */
interface LiveEmitter {
  on(event: string, listener: (...args: unknown[]) => void): void;
  connect(roomId?: string): Promise<{ roomId?: string }>;
  disconnect(): Promise<void>;
  availableGifts?: unknown;
  fetchAvailableGifts?: () => Promise<unknown>;
}

/**
 * Adapter over tiktok-live-connector.
 * Frontend never imports this — only domain GiftEvent leaves the backend.
 */
export class TikTokLiveServiceImpl implements TikTokLiveService {
  private connection: LiveEmitter | null = null;
  private username: string | null = null;
  private connected = false;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private shouldReconnect = false;
  /** giftId → TikTok CDN icon / cost / name from catalog */
  private readonly giftImages = new Map<string, string>();
  private readonly giftDiamonds = new Map<string, number>();
  private readonly giftNames = new Map<string, string>();

  private giftCbs: GiftCb[] = [];
  private chatCbs: ChatCb[] = [];
  private viewerCbs: ViewerCb[] = [];
  private followCbs: UserCb[] = [];
  private memberCbs: UserCb[] = [];

  async connect(username: string): Promise<void> {
    const uniqueId = username.replace(/^@/, "").trim();
    if (!uniqueId) {
      throw new Error("TikTok username is empty");
    }

    await this.disconnect(false);
    this.username = uniqueId;
    this.shouldReconnect = true;
    this.giftImages.clear();
    this.giftDiamonds.clear();
    this.giftNames.clear();

    // ponytail: cast — package d.ts hides .on(); runtime is still EventEmitter
    const connection = new TikTokLiveConnection(uniqueId, {
      processInitialData: true,
      enableExtendedGiftInfo: true,
    } as ConstructorParameters<typeof TikTokLiveConnection>[1]) as unknown as LiveEmitter;

    this.connection = connection;
    this.bind(connection);

    console.log(`[TIKTOK] Connecting to @${uniqueId}…`);
    try {
      const state = await connection.connect();
      this.connected = true;
      console.log(
        `[TIKTOK] Connected roomId=${String(state.roomId ?? "unknown")}`,
      );
      await this.refreshGiftCatalog(connection);
    } catch (err) {
      this.connected = false;
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[TIKTOK] Connect failed: ${message}`);
      this.scheduleReconnect();
      throw err;
    }
  }

  async disconnect(stopReconnect = true): Promise<void> {
    if (stopReconnect) this.shouldReconnect = false;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.connection) {
      try {
        await this.connection.disconnect();
      } catch (err) {
        console.warn("[TIKTOK] disconnect error", err);
      }
      this.connection = null;
    }
    this.connected = false;
    console.log("[TIKTOK] Disconnected");
  }

  isConnected(): boolean {
    return this.connected;
  }

  getUsername(): string | null {
    return this.username;
  }

  onGift(callback: GiftCb): void {
    this.giftCbs.push(callback);
  }

  onChat(callback: ChatCb): void {
    this.chatCbs.push(callback);
  }

  onViewerUpdate(callback: ViewerCb): void {
    this.viewerCbs.push(callback);
  }

  onFollow(callback: UserCb): void {
    this.followCbs.push(callback);
  }

  onMemberJoin(callback: UserCb): void {
    this.memberCbs.push(callback);
  }

  private bind(connection: LiveEmitter): void {
    connection.on(ControlEvent.CONNECTED, () => {
      this.connected = true;
      console.log("[TIKTOK] Connected");
    });

    connection.on(ControlEvent.DISCONNECTED, () => {
      this.connected = false;
      console.warn("[TIKTOK] Connection lost");
      this.scheduleReconnect();
    });

    connection.on(ControlEvent.ERROR, (err: unknown) => {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[TIKTOK] Error: ${message}`);
    });

    connection.on(WebcastEvent.GIFT, (raw: unknown) => {
      try {
        const data = raw as WebcastGift;
        const giftType = data.giftDetails?.giftType;
        const repeatEnd = Boolean(data.repeatEnd);
        // Streakable gifts fire many times; only finalize when streak ends.
        if (giftType === 1 && !repeatEnd) {
          return;
        }

        const username = data.user?.uniqueId ?? data.user?.nickname;
        const userId = String(data.user?.userId ?? username ?? "");
        if (!username || !userId) return;

        const giftId =
          data.giftId !== undefined ? String(data.giftId) : undefined;
        const ext = data.extendedGiftInfo as
          | { name?: string; giftName?: string; diamond_count?: number; diamondCount?: number }
          | undefined;

        const giftName =
          data.giftDetails?.giftName ??
          ext?.name ??
          ext?.giftName ??
          (giftId ? this.giftNames.get(giftId) : undefined) ??
          `Gift ${giftId ?? ""}`;

        const giftImageUrl =
          extractGiftImageUrl(data) ??
          (giftId ? this.giftImages.get(giftId) : undefined);

        const diamondCount =
          asPositiveInt(data.giftDetails?.diamondCount) ??
          asPositiveInt(ext?.diamond_count) ??
          asPositiveInt(ext?.diamondCount) ??
          asPositiveInt(data.diamondCount) ??
          (giftId ? this.giftDiamonds.get(giftId) : undefined);

        if (giftId && giftImageUrl) this.giftImages.set(giftId, giftImageUrl);
        if (giftId && diamondCount !== undefined) {
          this.giftDiamonds.set(giftId, diamondCount);
        }
        if (giftId && giftName) this.giftNames.set(giftId, giftName);

        const event: TikTokGiftEvent = {
          userId,
          username,
          giftId,
          giftName,
          giftImageUrl,
          diamondCount,
          repeatCount: data.repeatCount ?? 1,
          repeatEnd: true,
          eventKey: [
            userId,
            giftId ?? giftName,
            data.repeatCount ?? 1,
            data.groupId ?? data.msgId ?? Date.now(),
          ].join("|"),
        };

        console.log(
          `[GIFT RAW] @${username} ${giftName} x${event.repeatCount} · ${diamondCount ?? "?"}💎 · id=${giftId ?? "?"}`,
        );

        for (const cb of this.giftCbs) cb(event);
      } catch (err) {
        console.error("[TIKTOK] gift handler failed", err);
      }
    });

    connection.on(WebcastEvent.CHAT, (raw: unknown) => {
      try {
        const data = raw as WebcastChat;
        const username = data.user?.uniqueId;
        const userId = String(data.user?.userId ?? username ?? "");
        if (!username) return;
        const event: TikTokChatEvent = {
          userId,
          username,
          comment: data.comment ?? "",
        };
        for (const cb of this.chatCbs) cb(event);
      } catch (err) {
        console.error("[TIKTOK] chat handler failed", err);
      }
    });

    connection.on(WebcastEvent.ROOM_USER, (raw: unknown) => {
      try {
        const data = raw as WebcastRoomUser;
        const count = data.viewerCount ?? data.totalUser;
        if (typeof count !== "number") return;
        for (const cb of this.viewerCbs) cb({ count });
      } catch (err) {
        console.error("[TIKTOK] viewer handler failed", err);
      }
    });

    connection.on(WebcastEvent.FOLLOW, (raw: unknown) => {
      try {
        const user = pickUser(raw as WebcastUserLike);
        if (!user) return;
        for (const cb of this.followCbs) cb(user);
      } catch (err) {
        console.error("[TIKTOK] follow handler failed", err);
      }
    });

    connection.on(WebcastEvent.MEMBER, (raw: unknown) => {
      try {
        const user = pickUser(raw as WebcastUserLike);
        if (!user) return;
        console.log(`[VIEWER] @${user.username} joined`);
        for (const cb of this.memberCbs) cb(user);
      } catch (err) {
        console.error("[TIKTOK] member handler failed", err);
      }
    });
  }

  private scheduleReconnect(): void {
    if (!this.shouldReconnect || !this.username) return;
    if (this.reconnectTimer) return;
    console.log("[TIKTOK] Reconnecting in 5s…");
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      if (!this.username || !this.shouldReconnect) return;
      void this.connect(this.username).catch(() => {
        // connect() already schedules another attempt on failure
      });
    }, 5000);
  }

  private async refreshGiftCatalog(connection: LiveEmitter): Promise<void> {
    try {
      let list: unknown = connection.availableGifts;
      if ((!list || (Array.isArray(list) && list.length === 0)) && connection.fetchAvailableGifts) {
        list = await connection.fetchAvailableGifts();
      }
      const items = normalizeGiftList(list);
      let n = 0;
      for (const item of items) {
        const row = item as {
          id?: unknown;
          gift_id?: unknown;
          name?: unknown;
          giftName?: unknown;
          diamond_count?: unknown;
          diamondCount?: unknown;
        };
        const id = String(row.id ?? row.gift_id ?? "");
        if (!id) continue;
        const url = extractGiftImageUrl(item);
        if (url) this.giftImages.set(id, url);
        const diamonds =
          asPositiveInt(row.diamond_count) ?? asPositiveInt(row.diamondCount);
        if (diamonds !== undefined) this.giftDiamonds.set(id, diamonds);
        const name = String(row.name ?? row.giftName ?? "").trim();
        if (name) this.giftNames.set(id, name);
        n++;
      }
      console.log(
        `[TIKTOK] Gift catalog: ${n} (icons=${this.giftImages.size}, costs=${this.giftDiamonds.size})`,
      );
    } catch (err) {
      console.warn("[TIKTOK] gift catalog failed", err);
    }
  }
}

function normalizeGiftList(list: unknown): unknown[] {
  if (Array.isArray(list)) return list;
  if (list && typeof list === "object") {
    const obj = list as Record<string, unknown>;
    if (Array.isArray(obj.gifts)) return obj.gifts;
    if (Array.isArray(obj.data)) return obj.data;
  }
  return [];
}

function pickUser(data: WebcastUserLike): TikTokUserEvent | null {
  const username = data.user?.uniqueId ?? data.uniqueId;
  const userId = String(data.user?.userId ?? data.userId ?? username ?? "");
  if (!username || !userId) return null;
  return { userId, username };
}

interface WebcastUser {
  userId?: string | number;
  uniqueId?: string;
  nickname?: string;
}

interface WebcastGift {
  user?: WebcastUser;
  giftId?: string | number;
  repeatCount?: number;
  repeatEnd?: boolean | number;
  diamondCount?: number;
  groupId?: string | number;
  msgId?: string | number;
  giftDetails?: {
    giftName?: string;
    giftType?: number;
    diamondCount?: number;
  };
  extendedGiftInfo?: {
    name?: string;
    giftName?: string;
    diamond_count?: number;
    diamondCount?: number;
  };
}

function asPositiveInt(value: unknown): number | undefined {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n <= 0) return undefined;
  return Math.floor(n);
}

interface WebcastChat {
  user?: WebcastUser;
  comment?: string;
}

interface WebcastRoomUser {
  viewerCount?: number;
  totalUser?: number;
}

interface WebcastUserLike {
  user?: WebcastUser;
  uniqueId?: string;
  userId?: string | number;
}
