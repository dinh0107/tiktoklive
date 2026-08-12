import * as THREE from "three";
import type { CharacterManager } from "../characters/CharacterManager";
import type { CameraController } from "../scene/CameraController";
import type { BarScene } from "../scene/BarScene";
import type { GiftNotification } from "../ui/GiftNotification";
import {
  formatGiftLabel,
  planGiftEffect,
  resolveGiftTier,
} from "./giftEffects";
import type { GiftParticles } from "./GiftParticles";
import type { GiftEvent } from "./gift.types";
import { GiftStreak } from "./GiftStreak";
import { DonorLeaderboard } from "./DonorLeaderboard";

export interface GiftEffectDeps {
  characters: CharacterManager;
  camera: CameraController;
  notification: GiftNotification;
  particles: GiftParticles;
  bar: BarScene;
}

const THEME_COLORS = [0xff4fa3, 0x2de0ff, 0xffe066, 0xff8a4a, 0xb06bff];

/**
 * Domain gift handler — socket/TikTok only feed GiftQueue → here.
 */
export class GiftEffectManager {
  private readonly deps: GiftEffectDeps;
  private readonly tmp = new THREE.Vector3();
  private readonly streak = new GiftStreak();
  private readonly donors = new DonorLeaderboard();

  constructor(deps: GiftEffectDeps) {
    this.deps = deps;
  }

  async handleGift(gift: GiftEvent): Promise<void> {
    console.log(
      `[GIFT] received @${gift.username} → ${gift.giftName} x${gift.repeatCount ?? 1}`,
    );

    let character =
      this.deps.characters.getCharacterByUserId(gift.userId) ??
      this.deps.characters.getCharacterByUsername(gift.username);

    if (!character) {
      character = this.deps.characters.assignCharacter({
        userId: gift.userId,
        username: gift.username,
      });
    }

    const plan = planGiftEffect(gift);
    const label = formatGiftLabel(gift, plan);
    const userTag = `@${gift.username.replace(/^@/, "")}`;
    const diamonds = giftDiamonds(gift);

    // Top donor LED wall behind stage
    const board = this.donors.add(
      gift.userId,
      gift.username,
      diamonds,
      character.data.id,
    );
    this.deps.bar.showTopDonor(board.top, board.topChanged);

    const streak = this.streak.apply(gift);
    this.deps.bar.showStreakBanner(streak.label, streak.count, streak.user);

    const djRequest =
      plan.tier === "medium" ||
      plan.tier === "large" ||
      plan.tier === "universe";

    const streakBit =
      streak.count > 1
        ? streak.continued
          ? `COMBO x${streak.count}`
          : `STREAK x${streak.count}`
        : "SPOTLIGHT";

    const topBit = board.topChanged ? " · 📺 TOP DONOR" : "";

    character.spotlight(plan.holdSeconds + 1.2);
    this.deps.notification.show({
      title: label,
      subtitle: djRequest
        ? `${streakBit} · ${userTag} · 🎧 DJ REQUEST${topBit}`
        : `${streakBit} · ${userTag} đang được phục vụ${topBit}`,
    });

    if (plan.particle !== "none") {
      const intensity = 1 + Math.min(1.5, ((gift.repeatCount ?? 1) - 1) * 0.1);
      this.deps.particles.spawn(
        plan.particle,
        character.getWorldPosition(this.tmp),
        { intensity },
      );
      if (plan.particleEncore) {
        window.setTimeout(() => {
          this.deps.particles.spawn(
            plan.particleEncore!,
            character.getWorldPosition(this.tmp),
            { intensity: intensity * 0.85 },
          );
        }, 700);
      }
    }

    if (plan.screenShake) {
      this.deps.notification.shake();
    }

    if (djRequest) {
      const theme =
        THEME_COLORS[Math.abs(hashStr(gift.userId)) % THEME_COLORS.length]!;
      this.deps.bar.dj.requestBeat(plan.holdSeconds + 1.5);
      this.deps.bar.lasers.setTheme(theme, plan.holdSeconds + 1.5);
    }

    await Promise.all([
      character.playAnimation(plan.animation),
      this.deps.camera.focusCharacter(
        character,
        plan.holdSeconds,
        plan.cameraDrama,
      ),
    ]);

    console.log(`[GIFT] processed ${character.data.id}`);
  }
}

function giftDiamonds(gift: GiftEvent): number {
  const repeat = Math.max(1, gift.repeatCount ?? 1);
  if (gift.diamondCount !== undefined && gift.diamondCount > 0) {
    return gift.diamondCount * repeat;
  }
  const tier = resolveGiftTier(gift.giftName);
  const unit =
    tier === "universe"
      ? 1000
      : tier === "large"
        ? 299
        : tier === "medium"
          ? 10
          : tier === "rose"
            ? 1
            : 5;
  return unit * repeat;
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}
