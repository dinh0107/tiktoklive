/**
 * Combo streak state for neon banner (feature #2).
 * Same user + same gift within window stacks; otherwise starts fresh.
 */
export class GiftStreak {
  private userId: string | null = null;
  private username = "";
  private giftKey = "";
  private count = 0;
  private expiresAt = 0;
  private readonly windowMs: number;

  constructor(windowMs = 14_000) {
    this.windowMs = windowMs;
  }

  apply(gift: {
    userId: string;
    username: string;
    giftName: string;
    repeatCount?: number;
  }): { count: number; continued: boolean; label: string; user: string } {
    const now = Date.now();
    const label = gift.giftName.trim();
    const key = label.toLowerCase();
    const add = Math.max(1, gift.repeatCount ?? 1);
    const user = gift.username.replace(/^@/, "");

    const continued =
      this.userId === gift.userId &&
      this.giftKey === key &&
      now < this.expiresAt;

    if (continued) {
      this.count += add;
    } else {
      this.userId = gift.userId;
      this.username = user;
      this.giftKey = key;
      this.count = add;
    }
    this.expiresAt = now + this.windowMs;

    return {
      count: this.count,
      continued,
      label: label.toUpperCase(),
      user: this.username,
    };
  }

  isActive(now = Date.now()): boolean {
    return this.count > 0 && now < this.expiresAt;
  }

  clear(): void {
    this.userId = null;
    this.giftKey = "";
    this.count = 0;
    this.expiresAt = 0;
  }
}
