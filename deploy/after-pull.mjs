/**
 * Post-git-pull build for Plesk (Windows or Linux).
 * Run from repo root: node deploy/after-pull.mjs
 */
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";

function run(cwd, args) {
  console.log(`\n> ${npm} ${args.join(" ")}  (${cwd})`);
  const r = spawnSync(npm, args, {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });
  if (r.status !== 0) {
    process.exit(r.status ?? 1);
  }
}

const fe = join(root, "frontend");
const be = join(root, "backend");
const dist = join(fe, "dist");
const pub = join(be, "public");

run(fe, ["ci"]);
run(fe, ["run", "build"]);
run(be, ["ci", "--omit=dev"]);
run(be, ["run", "build"]);

if (!existsSync(dist)) {
  console.error("frontend/dist missing after build");
  process.exit(1);
}

if (existsSync(pub)) rmSync(pub, { recursive: true, force: true });
mkdirSync(pub, { recursive: true });
cpSync(dist, pub, { recursive: true });

console.log("\n[deploy] OK — backend/dist + backend/public ready");
console.log("[deploy] Restart Node.js app in Plesk if it did not auto-restart.");
