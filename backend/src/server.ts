import cors from "cors";
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { env } from "./config/env.js";
import { CharacterService } from "./characters/character.service.js";
import { GiftService } from "./gifts/gift.service.js";
import type { GiftEvent } from "./gifts/gift.types.js";
import { SocketService } from "./socket/socket.service.js";
import { TikTokLiveServiceImpl } from "./tiktok/tiktok.service.js";

export async function createApp() {
  const app = express();
  const httpServer = createServer(app);

  const characters = new CharacterService();
  const sockets = new SocketService();
  const gifts = new GiftService(characters, sockets);
  const tiktok = new TikTokLiveServiceImpl();

  const io = new Server(httpServer, {
    cors: {
      origin: env.frontendUrl,
      methods: ["GET", "POST"],
    },
  });
  sockets.attach(io, characters);

  wireTikTok(tiktok, characters, gifts, sockets);

  app.use(cors({ origin: env.frontendUrl }));
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({
      ok: true,
      ...sockets.getStatus(),
      tiktokUsername: tiktok.getUsername(),
    });
  });

  app.post("/api/demo/gift", (req, res) => {
    const body = req.body as Partial<GiftEvent>;
    const username = String(body.username ?? "demo_user").replace(/^@/, "");
    const giftName = String(body.giftName ?? "Rose");
    const repeatCount = Number(body.repeatCount ?? 1);

    const payload = gifts.processGift({
      userId: String(body.userId ?? `demo_${username}`),
      username,
      giftName,
      repeatCount: Number.isFinite(repeatCount) ? repeatCount : 1,
      repeatEnd: true,
      diamondCount: Number(body.diamondCount ?? diamondFor(giftName)),
      giftId: body.giftId,
      eventKey: `demo_${username}_${giftName}_${Date.now()}`,
    });

    if (!payload) {
      res.status(400).json({ ok: false, error: "Gift rejected" });
      return;
    }
    res.json({ ok: true, payload });
  });

  app.post("/api/demo/join", (req, res) => {
    const username = String(req.body?.username ?? "demo_user").replace(/^@/, "");
    const userId = String(req.body?.userId ?? `demo_${username}`);
    const character = characters.assignCharacter({ userId, username });
    sockets.emitViewerJoin({ userId, username }, character);
    res.json({ ok: true, character });
  });

  app.post("/api/tiktok/connect", async (req, res) => {
    const username = String(
      req.body?.username ?? env.tiktokUsername ?? "",
    ).replace(/^@/, "");
    if (!username || username === "your_tiktok_username") {
      res.status(400).json({
        ok: false,
        error: "Set TIKTOK_USERNAME in backend/.env or pass username",
      });
      return;
    }

    sockets.setTikTokStatus("connecting");
    try {
      await tiktok.connect(username);
      sockets.setTikTokStatus("connected");
      res.json({ ok: true, username });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      sockets.setTikTokStatus("error", message);
      res.status(502).json({ ok: false, error: message });
    }
  });

  app.post("/api/tiktok/disconnect", async (_req, res) => {
    await tiktok.disconnect();
    sockets.setTikTokStatus("disconnected");
    res.json({ ok: true });
  });

  app.get("/api/tiktok/status", (_req, res) => {
    res.json({
      ok: true,
      connected: tiktok.isConnected(),
      username: tiktok.getUsername(),
      ...sockets.getStatus(),
    });
  });

  app.get("/api/stats", (_req, res) => {
    res.json({
      ok: true,
      connected: tiktok.isConnected(),
      username: tiktok.getUsername(),
      ...sockets.getStatus(),
      characters: characters.getAllCharacters().map((c) => ({
        id: c.id,
        username: c.username,
        state: c.state,
      })),
    });
  });

  return { app, httpServer, characters, gifts, sockets, tiktok };
}

function wireTikTok(
  tiktok: TikTokLiveServiceImpl,
  characters: CharacterService,
  gifts: GiftService,
  sockets: SocketService,
): void {
  tiktok.onGift((gift) => {
    gifts.processGift(gift);
  });

  tiktok.onViewerUpdate((update) => {
    sockets.emitViewerUpdate(update.count);
  });

  tiktok.onMemberJoin((user) => {
    const character = characters.assignCharacter(user);
    sockets.emitViewerJoin(user, character);
  });

  tiktok.onFollow((user) => {
    const character = characters.assignCharacter(user);
    sockets.emitCharacterAssign(character);
  });

  tiktok.onChat((chat) => {
    // Known chatter gets a seat if missing — identity available.
    characters.assignCharacter({
      userId: chat.userId,
      username: chat.username,
    });
  });
}

function diamondFor(giftName: string): number {
  switch (giftName.toLowerCase()) {
    case "universe":
    case "tiktok universe":
    case "galaxy":
      return 1000;
    case "lion":
      return 299;
    case "medium gift":
      return 10;
    case "rose":
      return 1;
    default:
      return 1;
  }
}
