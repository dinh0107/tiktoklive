import type { GiftEffectPlan, GiftEvent, GiftTier } from "./gift.types";

const TIER_PLAN: Record<GiftTier, Omit<GiftEffectPlan, "tier" | "label" | "emoji">> = {
  rose: {
    animation: "drink",
    particle: "hearts",
    holdSeconds: 2.4,
    screenShake: false,
    cameraDrama: 1,
  },
  small: {
    animation: "surprised",
    particle: "sparkles",
    holdSeconds: 2.4,
    screenShake: false,
    cameraDrama: 1,
  },
  medium: {
    animation: "dance",
    particle: "sparkles",
    particleEncore: "hearts",
    holdSeconds: 2.9,
    screenShake: false,
    cameraDrama: 1,
  },
  large: {
    animation: "celebrate",
    particle: "burst",
    particleEncore: "sparkles",
    holdSeconds: 3.3,
    screenShake: true,
    cameraDrama: 2,
  },
  universe: {
    animation: "celebrate",
    particle: "stars",
    particleEncore: "burst",
    holdSeconds: 3.8,
    screenShake: true,
    cameraDrama: 2,
  },
};

const NAME_TO_TIER: Record<string, GiftTier> = {
  rose: "rose",
  roses: "rose",
  "tiny potato": "small",
  gg: "small",
  "medium gift": "medium",
  "finger heart": "medium",
  lion: "large",
  "tiktok universe": "universe",
  universe: "universe",
  galaxy: "universe",
};

export function resolveGiftTier(giftName: string, diamondCount?: number): GiftTier {
  const key = giftName.trim().toLowerCase();
  const mapped = NAME_TO_TIER[key];
  if (mapped) return mapped;

  // Fallback by diamonds when name unknown
  if (diamondCount !== undefined) {
    if (diamondCount >= 1000) return "universe";
    if (diamondCount >= 100) return "large";
    if (diamondCount >= 10) return "medium";
    if (diamondCount >= 1) return "rose";
  }
  return "small";
}

export function planGiftEffect(gift: GiftEvent): GiftEffectPlan {
  const tier = resolveGiftTier(gift.giftName, gift.diamondCount);
  const base = TIER_PLAN[tier];
  const emoji =
    tier === "rose"
      ? "🌹"
      : tier === "universe"
        ? "🌌"
        : tier === "large"
          ? "🦁"
          : tier === "medium"
            ? "✨"
            : "🎁";

  return {
    tier,
    ...base,
    label: gift.giftName,
    emoji,
  };
}

export function formatGiftLabel(gift: GiftEvent, plan: GiftEffectPlan): string {
  const count = gift.repeatCount && gift.repeatCount > 1 ? ` x${gift.repeatCount}` : "";
  return `${plan.emoji} ${plan.label.toUpperCase()}${count}`;
}
