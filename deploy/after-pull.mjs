/**
 * Post-git-pull on Plesk.
 * Frontend MUST be pre-built into backend/public (Vite/esbuild often fails on
 * Windows shared hosts: "Cannot read directory ../../../../.. Access denied").
 *
 * Local before push: npm run deploy:build
 * Server after pull:  node deploy/after-pull.mjs
 */
import { cpSync, existsSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const skipFe = process.env.SKIP_FRONTEND_BUILD === "1" || process.argv.includes("--server");

function run(cwd, args) {
  console.log(`\n> ${npm} ${args.join(" ")}  (${cwd})`);
  const r = spawnSync(npm, args, {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

function npmInstall(cwd, omitDev) {
  const hasLock =
    existsSync(join(cwd, "package-lock.json")) ||
    existsSync(join(cwd, "npm-shrinkwrap.json"));
  if (hasLock) {
    run(cwd, omitDev ? ["ci", "--omit=dev"] : ["ci"]);
  } else {
    console.warn(`[deploy] no lockfile in ${cwd} — npm install`);
    run(cwd, omitDev ? ["install", "--omit=dev"] : ["install"]);
  }
}

function hasPublicAssets(dir) {
  if (!existsSync(dir)) return false;
  try {
    return readdirSync(dir).length > 0;
  } catch {
    return false;
  }
}

const fe = join(root, "frontend");
const be = join(root, "backend");
const dist = join(fe, "dist");
const pub = join(be, "public");

npmInstall(root, true);

const onServer = skipFe || process.cwd().toLowerCase().includes("inetpub");

if (!onServer) {
  npmInstall(fe, false);
  run(fe, ["run", "build"]);
  if (!existsSync(dist)) {
    console.error("frontend/dist missing after build");
    process.exit(1);
  }
  if (existsSync(pub)) rmSync(pub, { recursive: true, force: true });
  mkdirSync(pub, { recursive: true });
  cpSync(dist, pub, { recursive: true });
  console.log("[deploy] copied frontend/dist → backend/public");
} else {
  console.log(
    "[deploy] server mode — skip Vite (Plesk/Windows esbuild ACL). Using backend/public from git.",
  );
  if (!hasPublicAssets(pub)) {
    console.error(
      "[deploy] backend/public empty.\n" +
        "On your PC run:  npm run deploy:build\n" +
        "Commit backend/public + push, then Pull again on Plesk.",
    );
    process.exit(1);
  }
}

npmInstall(be, false); // need typescript (devDep) for `tsc`
run(be, ["run", "build"]);
run(be, ["prune", "--omit=dev"]);

if (!existsSync(join(be, "dist", "index.js"))) {
  console.error("backend/dist/index.js missing");
  process.exit(1);
}

console.log("\n[deploy] OK — restart Node.js app in Plesk.");
