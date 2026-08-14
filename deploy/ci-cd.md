# CI / CD (GitHub Actions)

Repo: `dinh0107/tiktoklive` · Domain: `live.chunmedia.vn`

## Pipelines

| Workflow | Khi nào | Làm gì |
|----------|---------|--------|
| **CI** | PR + push `main` | `npm ci` + build FE/BE, fail nếu lỗi |
| **CD** | push `main` | Build FE trên Ubuntu → commit `backend/public` (`[skip ci]`) |
| **CD Plesk SSH** | optional | SSH vào host → `git pull` + `after-pull --server` |

## Bạn cần làm

1. Push workflows lên GitHub (file trong `.github/workflows/`).
2. GitHub → **Actions** → enable nếu bị tắt.
3. Plesk vẫn **Git Pull** (hoặc bật auto-deploy) sau mỗi CD commit.
4. *(Tuỳ chọn)* Secrets cho SSH auto-pull:

| Secret | Ví dụ |
|--------|--------|
| `PLESK_HOST` | IP hoặc hostname server |
| `PLESK_USER` | user SSH Plesk |
| `PLESK_SSH_KEY` | private key (full PEM) |
| `PLESK_APP_PATH` | `C:\Inetpub\vhosts\chunmedia.vn\live.chunmedia.vn` |

Không set secrets → workflow SSH bỏ qua / chỉ chạy tay (**workflow_dispatch**).

## Flow hàng ngày

```
code → push main
  → CI check
  → CD cập nhật backend/public
  → Plesk Pull (hoặc SSH CD)
  → Restart Node nếu cần
```
