export interface GiftEvent {
  userId: string;
  username: string;
  giftId?: string;
  giftName: string;
  diamondCount?: number;
  repeatCount?: number;
  repeatEnd?: boolean;
  /** Optional client/server id for dedupe. */
  eventKey?: string;
  /** TikTok CDN gift icon (preferred over emoji). */
  giftImageUrl?: string;
}

export type GiftTier =
  | "rose"
  | "small"
  | "medium"
  | "large"
  | "universe";

export interface GiftEffectPlan {
  tier: GiftTier;
  animation: "drink" | "dance" | "surprised" | "celebrate";
  particle: "hearts" | "sparkles" | "burst" | "stars" | "none";
  /** Extra particle burst mid-animation for big gifts. */
  particleEncore?: "hearts" | "sparkles" | "burst" | "stars";
  holdSeconds: number;
  screenShake: boolean;
  /** Camera drama: 1 = normal, 2 = close hype shot. */
  cameraDrama: 1 | 2;
  label: string;
  emoji: string;
}
