import { io } from "socket.io-client";
import {
  BACKEND_URL,
  postDemoGift,
  postTikTokConnect,
  postTikTokDisconnect,
} from "./network/socket";

const LS_USER = "meme-bar.tiktokUsername";
const LS_DEMO = "meme-bar.demoUser";
const MAX_FEED = 40;

interface StatsCharacter {
  id: string;
  username: string;
  state: string;
}

interface FullStats {
  ok: boolean;
  connected: boolean;
  username: string | null;
  tiktok: string;
  viewers: number;
  characters: StatsCharacter[];
}

const el = {
  mBackend: document.querySelector<HTMLElement>("#m-backend")!,
  mTiktok: document.querySelector<HTMLElement>("#m-tiktok")!,
  mTiktokUser: document.querySelector<HTMLElement>("#m-tiktok-user")!,
  mViewers: document.querySelector<HTMLElement>("#m-viewers")!,
  mChars: document.querySelector<HTMLElement>("#m-chars")!,
  detail: document.querySelector<HTMLElement>("#tiktok-detail")!,
  username: document.querySelector<HTMLInputElement>("#tiktok-username")!,
  demoUser: document.querySelector<HTMLInputElement>("#demo-user")!,
  demoLog: document.querySelector<HTMLElement>("#demo-log")!,
  obsUrl: document.querySelector<HTMLInputElement>("#obs-url")!,
  toast: document.querySelector<HTMLElement>("#toast")!,
  connect: document.querySelector<HTMLButtonElement>("#btn-connect")!,
  disconnect: document.querySelector<HTMLButtonElement>("#btn-disconnect")!,
  refresh: document.querySelector<HTMLButtonElement>("#btn-refresh")!,
  copyObs: document.querySelector<HTMLButtonElement>("#btn-copy-obs")!,
  giftFeed: document.querySelector<HTMLUListElement>("#gift-feed")!,
  giftEmpty: document.querySelector<HTMLElement>("#gift-empty")!,
  charList: document.querySelector<HTMLUListElement>("#char-list")!,
  charEmpty: document.querySelector<HTMLElement>("#char-empty")!,
};

el.username.value = localStorage.getItem(LS_USER) ?? "";
el.demoUser.value = localStorage.getItem(LS_DEMO) ?? "demo_fan";
el.obsUrl.value = `${window.location.origin}/overlay`;

el.username.addEventListener("change", () => {
  localStorage.setItem(LS_USER, el.username.value.trim().replace(/^@/, ""));
});
el.demoUser.addEventListener("change", () => {
  localStorage.setItem(LS_DEMO, el.demoUser.value.trim() || "demo_fan");
});

el.connect.addEventListener("click", () => void onConnect());
el.disconnect.addEventListener("click", () => void onDisconnect());
el.refresh.addEventListener("click", () => void refreshStats());
el.copyObs.addEventListener("click", () => void copyObs());

document.querySelectorAll<HTMLButtonElement>("[data-gift]").forEach((btn) => {
  btn.addEventListener("click", () => {
    void sendDemo(btn.dataset.gift ?? "Rose", Number(btn.dataset.repeat ?? "1"));
  });
});

const socket = io(BACKEND_URL, {
  transports: ["websocket", "polling"],
  reconnection: true,
});

socket.on("connect", () => {
  el.mBackend.textContent = "online";
  el.mBackend.className = "metric-value is-ok";
  void refreshStats();
});

socket.on("disconnect", () => {
  el.mBackend.textContent = "offline";
  el.mBackend.className = "metric-value is-err";
});

socket.on(
  "tiktok:status",
  (msg: { status: string; detail: string | null }) => {
    setTikTokMetric(msg.status, el.mTiktokUser.textContent?.replace(/^@/, "") || null);
    el.detail.textContent = msg.detail ?? "";
    void refreshStats();
  },
);

socket.on("viewer:update", (msg: { count: number }) => {
  el.mViewers.textContent = String(msg.count ?? 0);
});

socket.on(
  "gift:received",
  (msg: {
    gift?: { giftName?: string; username?: string; repeatCount?: number };
  }) => {
    const g = msg.gift;
    if (!g?.giftName) return;
    pushGift(
      g.giftName,
      g.username ?? "?",
      g.repeatCount && g.repeatCount > 1 ? g.repeatCount : 1,
    );
    void refreshStats();
  },
);

socket.on("character:assign", () => {
  void refreshStats();
});

socket.on("viewer:join", () => {
  void refreshStats();
});

void refreshStats();
window.setInterval(() => void refreshStats(), 4000);

async function onConnect(): Promise<void> {
  const username = el.username.value.trim().replace(/^@/, "");
  if (!username) {
    toast("Nhập username TikTok trước");
    return;
  }
  localStorage.setItem(LS_USER, username);
  el.connect.disabled = true;
  setTikTokMetric("connecting", username);
  el.detail.textContent = "";
  try {
    await postTikTokConnect(username);
    toast(`Connected @${username}`);
    await refreshStats();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    setTikTokMetric("error", username);
    el.detail.textContent = msg;
    toast(msg);
  } finally {
    el.connect.disabled = false;
  }
}

async function onDisconnect(): Promise<void> {
  el.disconnect.disabled = true;
  try {
    await postTikTokDisconnect();
    toast("Disconnected");
    await refreshStats();
  } catch (err) {
    toast(err instanceof Error ? err.message : String(err));
  } finally {
    el.disconnect.disabled = false;
  }
}

async function sendDemo(giftName: string, repeatCount: number): Promise<void> {
  const username = el.demoUser.value.trim().replace(/^@/, "") || "demo_fan";
  localStorage.setItem(LS_DEMO, username);
  try {
    await postDemoGift({
      username,
      userId: `demo_${username}`,
      giftName,
      repeatCount,
      diamondCount: diamondFor(giftName),
    });
    el.demoLog.textContent = `OK → ${giftName} x${repeatCount} (@${username})`;
    toast(`Sent ${giftName}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    el.demoLog.textContent = msg;
    toast(msg);
  }
}

async function refreshStats(): Promise<void> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/stats`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as FullStats;

    el.mBackend.textContent = "online";
    el.mBackend.className = "metric-value is-ok";

    const status = data.connected ? "connected" : data.tiktok || "disconnected";
    setTikTokMetric(status, data.username);
    if (!el.username.value && data.username) {
      el.username.value = data.username;
    }

    el.mViewers.textContent = String(data.viewers ?? 0);

    const list = Array.isArray(data.characters) ? data.characters : [];
    el.mChars.textContent = String(list.length);
    renderCharacters(list);
  } catch {
    el.mBackend.textContent = "offline";
    el.mBackend.className = "metric-value is-err";
    el.mTiktok.textContent = "—";
    el.mTiktok.className = "metric-value";
  }
}

function setTikTokMetric(status: string, username: string | null): void {
  const label =
    status === "connected"
      ? "connected"
      : status === "connecting"
        ? "connecting"
        : status === "error"
          ? "error"
          : "offline";
  el.mTiktok.textContent = label;
  el.mTiktok.className =
    "metric-value " +
    (status === "connected"
      ? "is-ok"
      : status === "connecting"
        ? "is-warn"
        : status === "error"
          ? "is-err"
          : "");
  el.mTiktokUser.textContent = username ? `@${username}` : "—";
}

function pushGift(giftName: string, username: string, repeat: number): void {
  el.giftEmpty.hidden = true;
  const li = document.createElement("li");
  const left = document.createElement("span");
  left.innerHTML = `<strong>${escapeHtml(giftName)}</strong>${repeat > 1 ? ` x${repeat}` : ""} · <span class="who">@${escapeHtml(username)}</span>`;
  const when = document.createElement("span");
  when.className = "when";
  when.textContent = new Date().toLocaleTimeString();
  li.append(left, when);
  el.giftFeed.prepend(li);
  while (el.giftFeed.children.length > MAX_FEED) {
    el.giftFeed.lastElementChild?.remove();
  }
}

function renderCharacters(list: StatsCharacter[]): void {
  el.charList.replaceChildren();
  el.charEmpty.hidden = list.length > 0;
  for (const c of list.slice(0, 60)) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="who">@${escapeHtml(c.username)}</span><span class="meta">${escapeHtml(c.id)} · ${escapeHtml(c.state)}</span>`;
    el.charList.append(li);
  }
}

async function copyObs(): Promise<void> {
  try {
    await navigator.clipboard.writeText(el.obsUrl.value);
    toast("Đã copy OBS URL");
  } catch {
    el.obsUrl.select();
    toast("Copy thủ công (Ctrl+C)");
  }
}

function toast(message: string): void {
  el.toast.hidden = false;
  el.toast.textContent = message;
  window.setTimeout(() => {
    el.toast.hidden = true;
  }, 2200);
}

function diamondFor(giftName: string): number {
  switch (giftName.toLowerCase()) {
    case "universe":
      return 1000;
    case "lion":
      return 299;
    case "medium gift":
      return 10;
    default:
      return 1;
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
