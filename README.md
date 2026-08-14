# TikTok LIVE Meme Bar

Interactive 3D Meme Bar for TikTok LIVE (OBS Browser Source).

## Status

| Phase | Status |
|------|--------|
| 1 Three.js bar + camera | done |
| 2 CharacterManager | done |
| 3 GiftQueue + fake gifts | done |
| 4 Socket.IO backend ↔ frontend | done |
| 5 TikTok LIVE connector | done (adapter) |
| 6 TikTok → GiftQueue pipeline | done |
| 7 Particle effects | done |
| 8 OBS `/overlay` | done |
| 9 Performance | done |

## Requirements

- Node.js 20+
- npm

## Install

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Environment

Copy `backend/.env.example` → `backend/.env`:

```
PORT=3000
TIKTOK_USERNAME=your_tiktok_username
FRONTEND_URL=http://localhost:5173
```

Do not commit `.env`.

## Deploy (Windows + Plesk)

Xem hướng dẫn đầy đủ: [`deploy/plesk-windows.md`](deploy/plesk-windows.md)

Tóm tắt:

```bat
deploy\build-windows.bat
```

Upload thư mục `backend` (có `dist` + `public`) lên Plesk Node.js, `.env`:

```
FRONTEND_URL=https://your-domain.com
STATIC_DIR=./public
PORT=3000
```

Startup file: `dist/index.js`. Overlay: `https://your-domain.com/overlay`

Optional frontend:

```
VITE_BACKEND_URL=http://localhost:3000
```

## Demo mode (no LIVE required)

Dev panel gift buttons call:

`POST http://localhost:3000/api/demo/gift`

Example:

```bash
curl -X POST http://localhost:3000/api/demo/gift ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"duong\",\"giftName\":\"Rose\",\"repeatCount\":10}"
```

Flow (demo = production):

```
GiftEvent → GiftService → Socket gift:received → GiftQueue → GiftEffectManager
```

## TikTok LIVE

Library: [`tiktok-live-connector`](https://www.npmjs.com/package/tiktok-live-connector) (gift / chat / member / roomUser / follow supported).

1. Set `TIKTOK_USERNAME` in `.env` (streamer must be **live**), or click **TIKTOK CONNECT** in the panel.
2. Backend connects and maps gifts into the same `GiftService` as demo.
3. Streak gifts are finalized only when `repeatEnd` (no 10× camera spam for Rose x10).
4. If connect fails (offline / sign API), demo mode still works — errors are logged, server does not crash.

```
TikTok LIVE → TikTokLiveService → GiftService → Socket.IO → Frontend GiftQueue → Three.js
```

Frontend never talks to TikTok.

## Architecture

```
TikTok LIVE
  → TikTok LIVE Event Listener (backend adapter)
  → Node.js Backend (characters + gifts)
  → Socket.IO
  → Three.js Frontend
  → OBS Browser Source
  → TikTok LIVE
```

## OBS setup

1. Start backend + frontend (`npm run dev` in each).
2. Open **Dashboard**: http://localhost:5173/dashboard
   - Theo dõi TikTok / viewers / characters / gift feed
   - Connect LIVE + copy OBS URL + test gift
   (cũng mở được qua `/control`)
3. In OBS → **Sources** → **Browser**:
   - URL: `http://localhost:5173/overlay`
   - Width / Height: e.g. 1920×1080
4. Overlay mode: transparent, no debug panel.

Dev scene (with panel): `http://localhost:5173`  
Dashboard: `http://localhost:5173/dashboard`  
Hide panel: `http://localhost:5173/?debug=false`

## How to test Phase 4–8

1. Start backend + frontend.
2. Panel shows `Socket: on`.
3. Click **Rose / Lion / Universe** — camera + **particles** (hearts / burst / stars).
4. **QUEUE 5 GIFTS** — sequential focuses with particle bursts.
5. Open `http://localhost:5173/overlay` — no panel, transparent background.
6. Optional: set a live `TIKTOK_USERNAME` and **TIKTOK CONNECT**.

## How to add a gift effect

1. Map name → tier in `frontend/src/gifts/giftEffects.ts`.
2. Effects run in `GiftEffectManager` (animation + camera + particles + notification).
3. Particle kinds: `hearts` / `sparkles` / `burst` / `stars` via `GiftParticles` (Three.js Points).
4. Do not hook Three.js from the socket layer.

## Performance (Phase 9)

- Character textures downscaled ≤512px (less RAM)
- Shared sprite materials; bottles share mats (no per-frame flicker on 40+)
- FX / lights update every other frame; antialias off; DPR capped (1 / 1.25)
- Fewer lights, lasers, sparkles; disco without glitter orbit
- Caps: `MAX_CHARACTERS=80`, gift queue 30, particle bursts ≤4
- Pause when tab hidden

## How to replace placeholder with GLTF

`Character` owns the mesh. Swap internals / subclass later — `CharacterManager` stays the same.
