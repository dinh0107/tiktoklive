import { io, type Socket } from "socket.io-client";
import type { CharacterManager } from "../characters/CharacterManager";
import type { GiftQueue } from "../gifts/GiftQueue";
import type { GiftEvent } from "../gifts/gift.types";

/** Dev → localhost:3000. Production (same host on Plesk) → current origin. */
export const BACKEND_URL =
  (import.meta.env.VITE_BACKEND_URL as string | undefined)?.trim() ||
  (import.meta.env.DEV ? "http://localhost:3000" : window.location.origin);

export interface ServerCharacter {
  id: string;
  userId: string;
  username: string;
  position: { x: number; y: number; z: number };
  state?: string;
  type?: string;
}

export interface GiftReceivedMessage {
  type: "gift:received";
  gift: GiftEvent;
  character: ServerCharacter;
}

export type TikTokStatus = "disconnected" | "connecting" | "connected" | "error";

export interface SocketBridgeHandlers {
  onTikTokStatus?: (status: TikTokStatus, detail: string | null) => void;
  onViewerUpdate?: (count: number) => void;
}

/**
 * Socket → domain only. Never drives Three.js camera directly.
 */
export function connectBackend(
  characters: CharacterManager,
  giftQueue: GiftQueue,
  handlers: SocketBridgeHandlers = {},
): Socket {
  const socket = io(BACKEND_URL, {
    transports: ["websocket", "polling"],
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
  });

  socket.on("connect", () => {
    console.log("[SOCKET] connected");
  });

  socket.on("disconnect", (reason) => {
    console.log(`[SOCKET] disconnected (${reason})`);
  });

  socket.on("connect_error", (err) => {
    console.warn("[SOCKET] connect_error", err.message);
  });

  socket.on(
    "tiktok:status",
    (msg: { status: TikTokStatus; detail: string | null }) => {
      handlers.onTikTokStatus?.(msg.status, msg.detail);
    },
  );

  socket.on("viewer:update", (msg: { count: number }) => {
    handlers.onViewerUpdate?.(msg.count);
  });

  socket.on(
    "character:assign",
    (msg: { character: ServerCharacter }) => {
      // Snapshot / silent sync — no drop
      syncCharacter(characters, msg.character, false);
    },
  );

  socket.on(
    "viewer:join",
    (msg: { user: { userId: string; username: string }; character: ServerCharacter }) => {
      // "hey" drop from sky
      syncCharacter(characters, msg.character, true);
    },
  );

  socket.on("viewer:leave", (msg: { userId: string }) => {
    characters.markAway(msg.userId);
  });

  socket.on("gift:received", (msg: GiftReceivedMessage) => {
    console.log("[GIFT] received (socket)");
    syncCharacter(characters, msg.character, true);
    giftQueue.enqueue({
      ...msg.gift,
      userId: msg.character.userId,
      username: msg.character.username,
    });
  });

  return socket;
}

export function syncCharacter(
  characters: CharacterManager,
  server: ServerCharacter,
  dropFromSky = false,
): void {
  characters.assignCharacter(
    {
      userId: server.userId,
      username: server.username,
      type: server.type,
    },
    {
      id: server.id,
      position: server.position,
      spawn: dropFromSky && !characters.getCharacterByUserId(server.userId),
    },
  );
}

export async function postDemoGift(body: {
  username: string;
  giftName: string;
  repeatCount?: number;
  userId?: string;
  diamondCount?: number;
}): Promise<void> {
  const res = await fetch(`${BACKEND_URL}/api/demo/gift`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`demo gift failed: ${res.status} ${text}`);
  }
}

export async function postDemoJoin(username: string): Promise<void> {
  const res = await fetch(`${BACKEND_URL}/api/demo/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  if (!res.ok) {
    throw new Error(`demo join failed: ${res.status}`);
  }
}

export async function postTikTokConnect(username?: string): Promise<void> {
  const res = await fetch(`${BACKEND_URL}/api/tiktok/connect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(username ? { username } : {}),
  });
  const data = (await res.json()) as { ok: boolean; error?: string };
  if (!res.ok || !data.ok) {
    throw new Error(data.error ?? `tiktok connect failed: ${res.status}`);
  }
}

export async function postTikTokDisconnect(): Promise<void> {
  const res = await fetch(`${BACKEND_URL}/api/tiktok/disconnect`, {
    method: "POST",
  });
  const data = (await res.json()) as { ok: boolean; error?: string };
  if (!res.ok || !data.ok) {
    throw new Error(data.error ?? `tiktok disconnect failed: ${res.status}`);
  }
}

export interface TikTokStatusResponse {
  ok: boolean;
  connected: boolean;
  username: string | null;
  tiktok?: string;
  clients?: number;
}

export async function fetchTikTokStatus(): Promise<TikTokStatusResponse> {
  const res = await fetch(`${BACKEND_URL}/api/tiktok/status`);
  if (!res.ok) throw new Error(`status failed: ${res.status}`);
  return (await res.json()) as TikTokStatusResponse;
}
