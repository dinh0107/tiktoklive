import "dotenv/config";
import { resolve } from "node:path";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === "") {
    throw new Error(`Missing env ${name}`);
  }
  return value;
}

/** Comma-separated origins, or `*` for reflect-request (dev only). */
function parseOrigins(raw: string): string | string[] | boolean {
  const v = raw.trim();
  if (v === "*") return true;
  if (v.includes(",")) {
    return v.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return v;
}

/**
 * iisnode on Windows often sets PORT to a named pipe (\\.\pipe\...),
 * not a TCP port number — pass it through as string.
 */
function resolveListenPort(): string | number {
  const raw = process.env.PORT;
  if (raw === undefined || raw === "") return 3000;
  const n = Number(raw);
  if (Number.isInteger(n) && n >= 0 && n < 65536) return n;
  return raw;
}

export const env = {
  port: resolveListenPort(),
  tiktokUsername: (process.env.TIKTOK_USERNAME ?? "").replace(/^@/, ""),
  /** Public site URL(s) for CORS — e.g. https://meme.example.com */
  frontendUrl: required("FRONTEND_URL", "http://localhost:5173"),
  corsOrigin: parseOrigins(
    process.env.CORS_ORIGIN ??
      process.env.FRONTEND_URL ??
      "http://localhost:5173",
  ),
  /**
   * Folder of Vite build (frontend/dist). When set, Express serves overlay + dashboard.
   * Plesk: STATIC_DIR=./public  (copy frontend/dist → backend/public)
   */
  staticDir: (() => {
    const raw = process.env.STATIC_DIR;
    if (!raw) return null;
    // Absolute path (from app.js) or relative to cwd
    return resolve(raw);
  })(),
};
