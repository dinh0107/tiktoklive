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
    holdSeconds: 3.0,
    screenShake: false,
    cameraDrama: 1,
  },
  large: {
    animation: "celebrate",
    particle: "burst",
    particleEncore: "sparkles",
    holdSeconds: 3.5,
    screenShake: true,
    cameraDrama: 2,
  },
  universe: {
    animation: "celebrate",
    particle: "stars",
    particleEncore: "burst",
    holdSeconds: 4.2,
    screenShake: true,
    cameraDrama: 2,
  },
};

/** Demo / alias names when TikTok diamond cost missing. */
const NAME_TO_TIER: Record<string, GiftTier> = {
  rose: "rose",
  roses: "rose",
  rosa: "rose",
  "hoa hồng": "rose",
  "tiny potato": "small",
  potato: "small",
  gg: "small",
  "ice cream cone": "small",
  "medium gift": "medium",
  "finger heart": "medium",
  perfume: "medium",
  lion: "large",
  "dono's lion": "large",
  "drama queen": "large",
  "tiktok universe": "universe",
  universe: "universe",
  galaxy: "universe",
};

const NAME_TO_EMOJI: Record<string, string> = {
  rose: "🌹",
  roses: "🌹",
  rosa: "🌹",
  "hoa hồng": "🌹",
  "tiny potato": "🥔",
  potato: "🥔",
  gg: "👍",
  "ice cream cone": "🍦",
  "medium gift": "🎁",
  "finger heart": "💕",
  perfume: "🧴",
  lion: "🦁",
  "dono's lion": "🦁",
  "tiktok universe": "🌌",
  universe: "🌌",
  galaxy: "🌌",
  "drama queen": "👑",
};

const TIER_EMOJI: Record<GiftTier, string> = {
  rose: "🌹",
  small: "🎁",
  medium: "🎁",
  large: "🦁",
  universe: "🌌",
};

/**
 * Tier from TikTok unit diamond cost first (correct for LIVE),
 * then known gift names (demo buttons / aliases).
 */
export function resolveGiftTier(giftName: string, diamondCount?: number): GiftTier {
  if (diamondCount !== undefined && diamondCount > 0) {
    if (diamondCount >= 1000) return "universe";
    if (diamondCount >= 100) return "large";
    if (diamondCount >= 10) return "medium";
    // 1–9💎 → rose spotlight (drink + hearts)
    return "rose";
  }

  const mapped = NAME_TO_TIER[normalizeGiftKey(giftName)];
  return mapped ?? "small";
}

export function emojiForGift(giftName: string, tier: GiftTier): string {
  const key = normalizeGiftKey(giftName);
  return NAME_TO_EMOJI[key] ?? TIER_EMOJI[tier];
}

export function planGiftEffect(gift: GiftEvent): GiftEffectPlan {
  const tier = resolveGiftTier(gift.giftName, gift.diamondCount);
  const base = TIER_PLAN[tier];
  const emoji = emojiForGift(gift.giftName, tier);

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

function normalizeGiftKey(giftName: string): string {
  return giftName.trim().toLowerCase().replace(/\s+/g, " ");
}
