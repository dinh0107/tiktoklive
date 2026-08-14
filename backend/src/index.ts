import { env } from "./config/env.js";
import { createApp } from "./server.js";

async function main(): Promise<void> {
  const { httpServer, tiktok, sockets } = await createApp();

  httpServer.listen(env.port, () => {
    console.log(`[SERVER] listening on ${String(env.port)}`);
    console.log(`[SERVER] FRONTEND_URL=${env.frontendUrl}`);
  });

  // Auto-connect when username is configured (optional).
  if (env.tiktokUsername && env.tiktokUsername !== "your_tiktok_username") {
    sockets.setTikTokStatus("connecting");
    void tiktok
      .connect(env.tiktokUsername)
      .then(() => sockets.setTikTokStatus("connected"))
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : String(err);
        console.warn(
          `[TIKTOK] Auto-connect failed (demo mode still works): ${message}`,
        );
        sockets.setTikTokStatus("error", message);
      });
  } else {
    console.log(
      "[TIKTOK] No username configured — demo mode only. Set TIKTOK_USERNAME in .env",
    );
  }
}

main().catch((err) => {
  console.error("[SERVER] fatal", err);
  process.exit(1);
});
