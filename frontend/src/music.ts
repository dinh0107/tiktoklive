const LS_KEY = "meme-bar.musicUrl";

const urlInput = document.querySelector<HTMLInputElement>("#url")!;
const player = document.querySelector<HTMLElement>("#player")!;
const status = document.querySelector<HTMLElement>("#status")!;
const selfUrl = document.querySelector<HTMLElement>("#self-url")!;
const btnPlay = document.querySelector<HTMLButtonElement>("#btn-play")!;
const btnClear = document.querySelector<HTMLButtonElement>("#btn-clear")!;

selfUrl.textContent = `${window.location.origin}/music`;

const params = new URLSearchParams(window.location.search);
const fromQuery = params.get("src")?.trim();
const initial = fromQuery || localStorage.getItem(LS_KEY) || "";
if (initial) {
  urlInput.value = initial;
  mount(initial);
}

btnPlay.addEventListener("click", () => {
  const raw = urlInput.value.trim();
  if (!raw) {
    setStatus("Dán link YouTube hoặc SoundCloud.", "err");
    return;
  }
  mount(raw);
});

btnClear.addEventListener("click", () => {
  urlInput.value = "";
  player.replaceChildren();
  localStorage.removeItem(LS_KEY);
  const clean = `${window.location.pathname}`;
  window.history.replaceState({}, "", clean);
  setStatus("Đã xóa.", "");
});

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnPlay.click();
});

function mount(raw: string): void {
  const embed = toEmbed(raw);
  if (!embed) {
    setStatus("Link không nhận được — dùng YouTube hoặc SoundCloud.", "err");
    return;
  }

  localStorage.setItem(LS_KEY, raw);
  const next = `${window.location.pathname}?src=${encodeURIComponent(raw)}`;
  window.history.replaceState({}, "", next);

  player.replaceChildren();
  const iframe = document.createElement("iframe");
  iframe.src = embed.src;
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  // SoundCloud needs scrolling; YouTube fine either way
  iframe.setAttribute("frameborder", "0");
  if (embed.kind === "soundcloud") {
    iframe.style.background = "#000";
  }
  player.appendChild(iframe);
  setStatus(
    embed.kind === "youtube"
      ? "YouTube — bấm Play trong frame (OBS cần tương tác lần đầu)."
      : "SoundCloud — bấm Play trong frame.",
    "ok",
  );
}

function toEmbed(raw: string): { kind: "youtube" | "soundcloud"; src: string } | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    // bare youtube id
    if (/^[\w-]{11}$/.test(raw)) {
      return {
        kind: "youtube",
        src: `https://www.youtube.com/embed/${raw}?autoplay=1&rel=0`,
      };
    }
    return null;
  }

  const host = url.hostname.replace(/^www\./, "");

  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    if (id) {
      return {
        kind: "youtube",
        src: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`,
      };
    }
  }

  if (host.includes("youtube.com")) {
    const id =
      url.searchParams.get("v") ??
      (url.pathname.startsWith("/embed/")
        ? url.pathname.split("/")[2]
        : url.pathname.startsWith("/shorts/")
          ? url.pathname.split("/")[2]
          : undefined);
    if (id) {
      return {
        kind: "youtube",
        src: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`,
      };
    }
  }

  if (host.includes("soundcloud.com")) {
    const encoded = encodeURIComponent(url.toString());
    return {
      kind: "soundcloud",
      src: `https://w.soundcloud.com/player/?url=${encoded}&auto_play=true&hide_related=true&show_comments=false&visual=false`,
    };
  }

  return null;
}

function setStatus(text: string, kind: "" | "ok" | "err"): void {
  status.textContent = text;
  status.className = kind ? `status ${kind}` : "status";
}
