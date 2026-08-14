## CI / CD

Xem [`deploy/ci-cd.md`](ci-cd.md) — GitHub Actions build FE và commit `backend/public`.

---

# Deploy qua Git → Plesk (`live.chunmedia.vn`)

Repo: `https://github.com/dinh0107/tiktoklive.git`

```
máy bạn: npm run deploy:build → commit backend/public → push
Plesk:   Pull → node deploy/after-pull.mjs --server → Restart Node
```

> **Không build Vite trên Plesk Windows** — esbuild hay lỗi  
> `Cannot read directory "../../../../..": Access is denied`.

## 1. Máy bạn — mỗi lần đổi code / FE

```bat
cd C:\Users\nguye\meme-bar
npm run deploy:build
git add -A
git commit -m "Deploy build"
git push origin main
```

`deploy:build` tạo `backend/dist` + `backend/public` (commit cả `public`).

## 2. Plesk Git

- Domain: **live.chunmedia.vn**
- Repo: `https://github.com/dinh0107/tiktoklive.git` · branch `main`
- **Additional deploy actions:**

```bat
node deploy/after-pull.mjs --server
```

## 3. Plesk Node.js

| Mục | Giá trị |
|-----|---------|
| Application root | `C:\Inetpub\vhosts\chunmedia.vn\live.chunmedia.vn` (có `app.js`) |
| Application Startup File | `app.js` |
| Mode | `production` |
| Node | **20** |

**Environment variables:**

```
FRONTEND_URL=https://live.chunmedia.vn
PORT=3000
TIKTOK_USERNAME=
```

(`STATIC_DIR` mặc định trong `app.js` → `backend\public`)

## 4. Kiểm tra

- https://live.chunmedia.vn/api/health  
- https://live.chunmedia.vn/overlay  
- https://live.chunmedia.vn/dashboard  

## Lỗi

| Lỗi | Cách xử |
|-----|---------|
| Vite Access denied trên server | Đúng — dùng `--server` + commit `backend/public` |
| `backend/public empty` | Chạy `npm run deploy:build` trên PC rồi push |
| npm ci thiếu lock | Đã có `package-lock.json` ở root — Pull lại |
