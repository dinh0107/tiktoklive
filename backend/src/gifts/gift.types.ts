export interface GiftEvent {
  userId: string;
  username: string;
  giftId?: string;
  giftName: string;
  diamondCount?: number;
  repeatCount?: number;
  repeatEnd?: boolean;
  eventKey?: string;
  /** TikTok gift icon URL (CDN). */
  giftImageUrl?: string;
}

export interface GiftReceivedPayload {
  type: "gift:received";
  gift: GiftEvent;
  character: {
    id: string;
    userId: string;
    username: string;
    position: { x: number; y: number; z: number };
  };
}
