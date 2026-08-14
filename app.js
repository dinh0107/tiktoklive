/**
 * Plesk Application Startup File — keep name exactly `app.js`.
 * Application root = repo root (folder có app.js + backend/ + frontend/).
 */
import { config } from "dotenv";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const backendEnv = join(root, "backend", ".env");
const rootEnv = join(root, ".env");

if (existsSync(backendEnv)) config({ path: backendEnv });
else if (existsSync(rootEnv)) config({ path: rootEnv });

const entry = join(root, "backend", "dist", "index.js");
if (!existsSync(entry)) {
  console.error(
    `[plesk] Missing ${entry}\nRun: node deploy/after-pull.mjs`,
  );
  process.exit(1);
}

process.env.STATIC_DIR =
  process.env.STATIC_DIR || join(root, "backend", "public");
process.env.FRONTEND_URL =
  process.env.FRONTEND_URL || "https://live.chunmedia.vn";

await import(pathToFileURL(entry).href);
