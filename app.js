/**
 * Plesk / iisnode startup — MUST be CommonJS (iisnode uses require()).
 * Do not add "type":"module" at repo root, and do not use top-level await here.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const root = __dirname;

function loadEnv(file) {
  try {
    require("dotenv").config({ path: file });
  } catch {
    // dotenv optional if env set in Plesk UI
  }
}

if (fs.existsSync(path.join(root, "backend", ".env"))) {
  loadEnv(path.join(root, "backend", ".env"));
} else if (fs.existsSync(path.join(root, ".env"))) {
  loadEnv(path.join(root, ".env"));
}

process.env.STATIC_DIR =
  process.env.STATIC_DIR || path.join(root, "backend", "public");
process.env.FRONTEND_URL =
  process.env.FRONTEND_URL || "https://live.chunmedia.vn";

// iisnode injects PORT — keep whatever Plesk sets
if (!process.env.PORT) {
  process.env.PORT = "3000";
}

const entry = path.join(root, "backend", "dist", "index.js");
if (!fs.existsSync(entry)) {
  console.error(
    "[plesk] Missing " +
      entry +
      "\nRun on server: node deploy/after-pull.mjs --server\n" +
      "Or push a local npm run deploy:build first.",
  );
  process.exit(1);
}

import(pathToFileURL(entry).href).catch((err) => {
  console.error("[plesk] failed to start backend", err);
  process.exit(1);
});
