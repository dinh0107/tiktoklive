# Deploy Meme Bar lên Windows + Plesk

Kiến trúc gọn: **1 domain = 1 Node app** (API + Socket.IO + static overlay).

```
OBS Browser Source → https://your-domain.com/overlay
Dashboard           → https://your-domain.com/dashboard
API / Socket.IO     → cùng domain
```

## Ví dụ domain thật: member.chunmedia.vn

`.env` trên server:

```env
PORT=3000
FRONTEND_URL=https://member.chunmedia.vn
STATIC_DIR=./public
TIKTOK_USERNAME=
```

| Trang | URL |
|-------|-----|
| Health | https://member.chunmedia.vn/api/health |
| Overlay (OBS) | https://member.chunmedia.vn/overlay |
| Dashboard | https://member.chunmedia.vn/dashboard |
| Music | https://member.chunmedia.vn/music |

File mẫu: `backend/.env.plesk.example` → copy thành `.env` trên Plesk.

## Deploy qua Git (khuyên dùng)

Chi tiết: [`deploy/plesk-git.md`](plesk-git.md)

Tóm tắt: `git push` → Plesk Pull → `node deploy/after-pull.mjs` → Restart Node.

Repo: `https://github.com/dinh0107/tiktoklive.git`  
Domain: `https://member.chunmedia.vn`

---

## Deploy upload tay (FTP / File Manager)

- Plesk Windows có **Node.js** (Extensions → Node.js), khuyến nghị Node **20 LTS**
- Domain/subdomain trỏ về server, SSL Let’s Encrypt bật
- Outbound HTTPS (TikTok connector cần gọi ra ngoài)

## 1. Build trên máy local (hoặc trên server)

```bat
cd frontend
npm ci
npm run build

cd ..\backend
npm ci
npm run build
```

Copy frontend vào backend:

```bat
xcopy /E /I /Y frontend\dist backend\public
```

## 2. Upload lên Plesk

Upload **cả thư mục `backend`** (đã có `dist/`, `public/`, `package.json`, `node_modules` hoặc cài lại trên server) vào ví dụ:

```
C:\Inetpub\vhosts\your-domain.com\meme-bar\
```

Trên server (SSH / RDP / Plesk Node console):

```bat
cd C:\Inetpub\vhosts\your-domain.com\meme-bar
npm ci --omit=dev
npm run build
```

Đảm bảo đã có `public\` = nội dung `frontend\dist`.

## 3. File `.env` trên server

Tạo `backend/.env` (cùng thư mục app Node):

```env
PORT=3000
TIKTOK_USERNAME=ten_tiktok_dang_live
FRONTEND_URL=https://your-domain.com
STATIC_DIR=./public
```

- `FRONTEND_URL` = URL HTTPS thật (không thêm `/` cuối)
- `STATIC_DIR=./public` để Express phục vụ overlay/dashboard
- Không commit `.env`

## 4. Plesk → Node.js

1. Domains → **your-domain.com** → **Node.js**
2. Enable Node.js
3. Cấu hình:
   - **Document root / Application root**: thư mục chứa `package.json` của backend  
     (vd. `meme-bar` hoặc `meme-bar\backend` tùy bạn upload)
   - **Application mode**: `production`
   - **Application startup file**: `dist/index.js`
   - **Node.js version**: 20.x
4. **Custom environment variables** (nếu không dùng file `.env`):
   - `PORT` = cổng Plesk gán (hoặc để Plesk tự set)
   - `FRONTEND_URL` = `https://your-domain.com`
   - `STATIC_DIR` = `./public`
   - `TIKTOK_USERNAME` = optional
5. **Enable Node.js** / Restart App
6. Mở `https://your-domain.com/api/health` → phải `{"ok":true,...}`

### WebSocket (Socket.IO)

Plesk/IIS proxy tới Node phải **cho WebSocket**.  
Nếu Socket không lên: bật WebSocket trong IIS / reverse proxy, hoặc hỏi host bật WS cho domain Node.

## 5. OBS

| Source | URL |
|--------|-----|
| Overlay | `https://your-domain.com/overlay` |
| Dashboard | `https://your-domain.com/dashboard` |
| Music | `https://your-domain.com/music` |

Browser Source: Width 1920, Height 1080, tick **Control audio via OBS** nếu cần; Shutdown when not visible tùy bạn.

## 6. Checklist

- [ ] `/api/health` OK
- [ ] `/overlay` hiện scene 3D
- [ ] `/dashboard` Connect TikTok khi đang LIVE
- [ ] Gift demo trên dashboard → overlay phản ứng
- [ ] Console browser không lỗi CORS / mixed content (phải HTTPS hết)

## Lỗi thường gặp

| Triệu chứng | Cách xử |
|-------------|---------|
| CORS / Socket fail | `FRONTEND_URL` đúng domain HTTPS; restart Node |
| `/overlay` 404 | Thiếu `STATIC_DIR` hoặc chưa copy `public` |
| TikTok Connect 502 | Giữ `tiktok-live-connector@2.0.9`; account phải đang LIVE |
| Không có tiếng Socket | Bật WebSocket trên proxy/IIS |
| Port conflict | Để Plesk quản lý PORT; đừng hardcode trùng IIS |

## Deploy lại (update code)

```bat
cd frontend && npm run build
xcopy /E /I /Y frontend\dist backend\public
cd backend && npm run build
```

Upload lại `backend\dist` + `backend\public`, rồi **Restart** Node app trong Plesk.
