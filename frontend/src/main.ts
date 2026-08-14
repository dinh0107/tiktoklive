import { SceneManager } from "./scene/SceneManager";
import {
  assertCharacterMapping,
  type CharacterManager,
} from "./characters/CharacterManager";
import { preloadCharacterArt } from "./characters/characterArt";
import { GiftEffectManager } from "./gifts/GiftEffectManager";
import { GiftQueue } from "./gifts/GiftQueue";
import { GiftNotification } from "./ui/GiftNotification";
import { ViewerCounter } from "./ui/ViewerCounter";
import {
  connectBackend,
  postDemoGift,
  postDemoJoin,
  postTikTokConnect,
  type TikTokStatus,
} from "./network/socket";
import type { Socket } from "socket.io-client";

const canvasEl = document.querySelector<HTMLCanvasElement>("#scene-canvas");
const uiRootEl = document.querySelector<HTMLElement>("#ui-root");
if (!canvasEl || !uiRootEl) {
  throw new Error("Missing #scene-canvas or #ui-root");
}
const canvas = canvasEl;
const uiRoot = uiRootEl;

const params = new URLSearchParams(window.location.search);
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const isOverlay =
  path.endsWith("/overlay") ||
  params.get("overlay") === "1" ||
  params.get("overlay") === "true";
/** OBS /overlay never shows the debug panel. */
const debug = !isOverlay && params.get("debug") !== "false";

if (isOverlay) {
  document.documentElement.classList.add("overlay-mode");
  document.title = "Meme Bar Overlay";
}

void boot();

async function boot(): Promise<void> {
  try {
    await preloadCharacterArt();
  } catch (err) {
    console.error("[APP] character art failed", err);
    const msg = document.createElement("div");
    msg.style.cssText =
      "position:fixed;inset:0;display:grid;place-items:center;color:#ffb14a;font:16px Segoe UI;background:#120818;z-index:50;padding:24px;text-align:center";
    msg.textContent =
      "Thiếu ảnh nhân vật trong frontend/public/characters (char_01…08.png + dj.png). Xem console.";
    document.body.appendChild(msg);
    return;
  }

  const app = new SceneManager(canvas, { transparent: isOverlay });
  // Empty floor until viewers type "hey" in chat
  assertCharacterMapping(app.characters);

  const notification = new GiftNotification(uiRoot);
  const viewerCounter = new ViewerCounter(uiRoot);
  const effects = new GiftEffectManager({
    characters: app.characters,
    camera: app.cameraController,
    notification,
    particles: app.particles,
    bar: app.bar,
  });
  const giftQueue = new GiftQueue((gift) => effects.handleGift(gift));

  const state = {
    tiktokStatus: "disconnected" as TikTokStatus,
    lastGiftLabel: "—",
  };

  const socket = connectBackend(app.characters, giftQueue, {
    onTikTokStatus: (status) => {
      state.tiktokStatus = status;
    },
    onViewerUpdate: (count) => {
      viewerCounter.setCount(count);
    },
  });

  app.start();

  if (debug) {
    wireDevPanel(app, app.characters, state);
    startStats(app.characters, giftQueue, socket, state);
  } else {
    document.querySelector("#dev-panel")?.remove();
  }

  console.log(
    isOverlay
      ? "[APP] OBS overlay mode (transparent, no debug)"
      : "[APP] Illustrated characters ready",
  );

  window.memeBar = app;
  window.giftQueue = giftQueue;
  window.memeSocket = socket;
}

declare global {
  interface Window {
    memeBar: SceneManager;
    giftQueue: GiftQueue;
    memeSocket: Socket;
  }
}

interface UiState {
  tiktokStatus: TikTokStatus;
  lastGiftLabel: string;
}

function wireDevPanel(
  app: SceneManager,
  manager: CharacterManager,
  state: UiState,
): void {
  const usernameInput =
    document.querySelector<HTMLInputElement>("#assign-username");

  document.querySelector("#btn-assign")?.addEventListener("click", () => {
    const username = usernameInput?.value.trim() || "demo_user";
    void postDemoJoin(username).catch((err) => {
      console.warn("[TEST] join via server failed, local assign", err);
      manager.assignCharacter({
        userId: `user_${normalize(username)}`,
        username,
      });
    });
  });

  document.querySelector("#btn-assign-dup")?.addEventListener("click", () => {
    const username = usernameInput?.value.trim() || "demo_user";
    const userId = `user_${normalize(username)}`;
    const a = manager.assignCharacter({ userId, username }, { spawn: false });
    const b = manager.assignCharacter({ userId, username }, { spawn: false });
    console.log(
      `[TEST] re-assign same user → same instance: ${a === b}, id=${a.data.id}`,
    );
  });

  document.querySelector("#btn-lookup")?.addEventListener("click", () => {
    const username = usernameInput?.value.trim() || "demo_user";
    const found = manager.getCharacterByUsername(username);
    console.log(
      found
        ? `[TEST] lookup @${username} → ${found.data.id}`
        : `[TEST] lookup @${username} → not found`,
    );
  });

  document.querySelectorAll<HTMLButtonElement>("[data-gift]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const giftName = btn.dataset.gift ?? "Rose";
      const repeat = Number(btn.dataset.repeat ?? "1");
      void sendServerGift(manager, giftName, repeat, state);
    });
  });

  document.querySelector("#btn-burst-queue")?.addEventListener("click", () => {
    const burst = [
      { giftName: "Rose", repeatCount: 5 },
      { giftName: "Lion" },
      { giftName: "Rose", repeatCount: 3 },
      { giftName: "Universe" },
      { giftName: "Medium Gift" },
    ];
    void (async () => {
      for (const item of burst) {
        await sendServerGift(
          manager,
          item.giftName,
          item.repeatCount ?? 1,
          state,
        );
      }
    })();
  });

  document.querySelector("#btn-reset-camera")?.addEventListener("click", () => {
    void app.cameraController.resetToGlobal();
  });

  document
    .querySelector("#btn-tiktok-connect")
    ?.addEventListener("click", () => {
      const username = usernameInput?.value.trim();
      void postTikTokConnect(username || undefined).catch((err) => {
        console.error("[TIKTOK] connect failed", err);
      });
    });
}

async function sendServerGift(
  manager: CharacterManager,
  giftName: string,
  repeatCount: number,
  state: UiState,
): Promise<void> {
  const all = manager.getAllCharacters();
  const pick =
    all[Math.floor(Math.random() * all.length)] ??
    manager.assignCharacter({ userId: "demo_fallback", username: "fallback" });

  state.lastGiftLabel = `@${pick.data.username} → ${giftName} x${repeatCount}`;
  try {
    await postDemoGift({
      username: pick.data.username,
      userId: pick.data.userId,
      giftName,
      repeatCount,
      diamondCount: diamondFor(giftName),
    });
  } catch (err) {
    console.error("[GIFT] server demo failed — is backend running?", err);
  }
}

function diamondFor(giftName: string): number {
  switch (giftName.toLowerCase()) {
    case "universe":
      return 1000;
    case "lion":
      return 299;
    case "medium gift":
      return 10;
    case "rose":
      return 1;
    default:
      return 1;
  }
}

function startStats(
  manager: CharacterManager,
  queue: GiftQueue,
  socket: Socket,
  state: UiState,
): void {
  const el = document.querySelector<HTMLElement>("#dev-stats");
  const tiktokEl = document.querySelector<HTMLElement>("#tiktok-status");
  const lastEl = document.querySelector<HTMLElement>("#last-gift");
  if (!el) return;

  const tick = (): void => {
    const status = state.tiktokStatus;
    const dot =
      status === "connected"
        ? "🟢"
        : status === "connecting"
          ? "🟡"
          : status === "error"
            ? "🔴"
            : "⚪";
    if (tiktokEl) tiktokEl.textContent = `TikTok: ${dot} ${status}`;
    if (lastEl) lastEl.textContent = `Last Gift: ${state.lastGiftLabel}`;
    el.textContent = `Characters: ${manager.count} · Queue: ${queue.size}${queue.isProcessing() ? " (processing)" : ""} · Socket: ${socket.connected ? "on" : "off"}`;
    requestAnimationFrame(tick);
  };
  tick();
}

function normalize(username: string): string {
  return username.replace(/^@/, "").toLowerCase();
}
