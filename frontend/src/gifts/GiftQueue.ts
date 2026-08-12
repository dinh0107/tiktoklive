import type { GiftEvent } from "./gift.types";
import { MAX_GIFT_QUEUE } from "../perf";

export type GiftHandler = (gift: GiftEvent) => Promise<void>;

/**
 * FIFO gift processor — one camera focus / effect at a time.
 * Demo gifts and real TikTok gifts share this queue.
 */
export class GiftQueue {
  private readonly queue: GiftEvent[] = [];
  private readonly seen = new Set<string>();
  private processing = false;
  private readonly handle: GiftHandler;

  constructor(handle: GiftHandler) {
    this.handle = handle;
  }

  get size(): number {
    return this.queue.length;
  }

  isProcessing(): boolean {
    return this.processing;
  }

  enqueue(gift: GiftEvent): void {
    if (!gift.username || !gift.giftName) {
      console.warn("[GIFT QUEUE] invalid gift ignored", gift);
      return;
    }

    if (gift.eventKey) {
      if (this.seen.has(gift.eventKey)) {
        console.log("[GIFT QUEUE] duplicate skipped", gift.eventKey);
        return;
      }
      this.seen.add(gift.eventKey);
      // ponytail: bounded dedupe memory — upgrade to LRU if LIVE runs for hours
      if (this.seen.size > 500) {
        const first = this.seen.values().next().value;
        if (first !== undefined) this.seen.delete(first);
      }
    }

    // Combo coalesce: open streak → bump counter on last matching queued item
    if (gift.repeatEnd === false) {
      const last = this.queue[this.queue.length - 1];
      if (
        last &&
        last.userId === gift.userId &&
        last.giftName === gift.giftName &&
        last.repeatEnd === false
      ) {
        last.repeatCount = Math.max(last.repeatCount ?? 1, gift.repeatCount ?? 1);
        console.log(
          `[GIFT QUEUE] combo update ${gift.giftName} x${last.repeatCount}`,
        );
        return;
      }
    }

    this.queue.push({ ...gift, repeatCount: gift.repeatCount ?? 1 });
    while (this.queue.length > MAX_GIFT_QUEUE) {
      const dropped = this.queue.shift();
      console.warn(
        `[GIFT QUEUE] overflow>${MAX_GIFT_QUEUE}, dropped ${dropped?.giftName}`,
      );
    }
    console.log(
      `[GIFT QUEUE] enqueued ${gift.giftName} (size=${this.queue.length})`,
    );
    void this.pump();
  }

  clear(): void {
    this.queue.length = 0;
  }

  private async pump(): Promise<void> {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const gift = this.queue.shift()!;
      console.log(`[GIFT QUEUE] Processing ${gift.giftName}`);
      try {
        await this.handle(gift);
        console.log("[GIFT QUEUE] Completed");
      } catch (err) {
        console.error("[GIFT QUEUE] handler failed", err);
      }
    }

    this.processing = false;
  }
}
