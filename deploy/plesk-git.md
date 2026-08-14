# Deploy qua Git → Plesk (member.chunmedia.vn)

Repo sẵn có: `https://github.com/dinh0107/tiktoklive.git`

```
máy bạn → git push → GitHub → Plesk Git Pull → build → Node restart
```

## A. Trên máy bạn (một lần / mỗi lần update)

```bat
cd C:\Users\nguye\meme-bar
git add -A
git status
git commit -m "Add Plesk git deploy"
git push origin main
```

(Không commit file `.env` — đã có trong `.gitignore`.)

## B. Plesk → gắn Git (một lần)

1. Domains → **member.chunmedia.vn** → **Git**
2. **Enable Git** / Add repository  
   - Repository URL: `https://github.com/dinh0107/tiktoklive.git`  
   - Nếu repo private: Personal Access Token (GitHub)  
   - Branch: `main`  
   - Deploy path / Clone to: thư mục app, ví dụ  
     `C:\Inetpub\vhosts\chunmedia.vn\member.chunmedia.vn\meme-bar`  
     (hoặc path Plesk hiện sẵn — nhớ path này là **Application root** của Node)
3. **Additional deploy actions** (chạy sau mỗi Pull) — dán:

```bat
node deploy/after-pull.mjs
```

Hoặc nếu Plesk chạy từ thư mục khác:

```bat
cd meme-bar && node deploy/after-pull.mjs
```

(điều chỉnh `cd` cho đúng chỗ có `package.json` root + folder `deploy`)

4. Bấm **Pull now** / Deploy lần đầu (sẽ `npm ci` + build — mất vài phút)

## C. Node.js trên cùng domain (một lần)

Domains → **member.chunmedia.vn** → **Node.js**:

| Mục | Giá trị |
|-----|---------|
| Application root | thư mục Git clone (chứa `backend/`, `frontend/`, `deploy/`) |
| Application startup file | `backend/dist/index.js` |
| Application mode | `production` |
| Node.js version | **20** |

**Custom environment variables:**

```
FRONTEND_URL=https://member.chunmedia.vn
STATIC_DIR=./public
PORT=3000
TIKTOK_USERNAME=
```

Lưu ý: `STATIC_DIR` tính từ **cwd** khi Node start. Plesk thường chạy với cwd = Application root.

Nếu startup là `backend/dist/index.js` và cwd = repo root:

```
STATIC_DIR=./backend/public
```

Nếu Application root = `.../meme-bar/backend` thì:

- Startup: `dist/index.js`
- `STATIC_DIR=./public`
- Deploy action phải `cd` lên parent rồi build, hoặc clone chỉ backend (không khuyến nghị)

**Khuyến nghị cấu hình gọn:**

- Git deploy path = `.../meme-bar` (repo root)
- Application root = `.../meme-bar/backend`
- Startup = `dist/index.js`
- Env: `STATIC_DIR=./public` , `FRONTEND_URL=https://member.chunmedia.vn`
- Deploy actions:

```bat
node ../deploy/after-pull.mjs
```

Không được — after-pull expect repo root. Đúng hơn:

```bat
cd .. && node deploy/after-pull.mjs
```

(khi Plesk current dir = backend)  

Hoặc set Application root = repo root và:

```
Startup file = backend/dist/index.js
STATIC_DIR = ./backend/public
FRONTEND_URL = https://member.chunmedia.vn
Deploy actions = node deploy/after-pull.mjs
```

→ **Cách này đơn giản nhất.**

## D. Tạo `.env` trên server (một lần, không qua Git)

File Manager → `meme-bar/backend/.env`:

```env
PORT=3000
FRONTEND_URL=https://member.chunmedia.vn
STATIC_DIR=./public
```

**Nếu** Application root = repo root và `STATIC_DIR=./backend/public`, ghi đúng path đó trong env Plesk (ưu tiên Custom env vars của Node.js hơn file `.env` nếu dotenv không load từ sai cwd).

`dotenv` load từ `process.cwd()`. Để chắc: điền biến trong **Plesk Node.js → Custom environment variables**, không phụ thuộc `.env`.

## E. Mỗi lần sửa code

```bat
git add -A
git commit -m "mô tả thay đổi"
git push origin main
```

Plesk: **Git → Pull updates** (hoặc bật auto deploy).  
Chờ deploy actions xong → **Node.js → Restart**.

## F. Kiểm tra

- https://member.chunmedia.vn/api/health  
- https://member.chunmedia.vn/overlay  
- https://member.chunmedia.vn/dashboard  

## Lỗi thường gặp

| Lỗi | Fix |
|-----|-----|
| `npm` not found in deploy actions | Trong Plesk Node bật Node, hoặc dùng full path `C:\Program Files\nodejs\npm.cmd` |
| Pull OK nhưng site cũ | Restart Node app |
| `STATIC_DIR` 404 overlay | Sai path `public` — xem mục C |
| Git private 401 | GitHub token trong Plesk Git |
| Build OOM | Host tăng RAM / build trên máy rồi commit `backend/public` (không khuyến nghị) |
