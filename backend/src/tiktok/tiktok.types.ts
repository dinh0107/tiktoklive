export interface TikTokGiftEvent {
  userId: string;
  username: string;
  giftId?: string;
  giftName: string;
  diamondCount?: number;
  repeatCount?: number;
  repeatEnd?: boolean;
  eventKey?: string;
  giftImageUrl?: string;
}

export interface TikTokChatEvent {
  userId: string;
  username: string;
  comment: string;
}

export interface TikTokViewerUpdateEvent {
  count: number;
}

export interface TikTokUserEvent {
  userId: string;
  username: string;
}

export interface TikTokLiveService {
  connect(username: string): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getUsername(): string | null;
  onGift(callback: (gift: TikTokGiftEvent) => void): void;
  onChat(callback: (chat: TikTokChatEvent) => void): void;
  onViewerUpdate(callback: (update: TikTokViewerUpdateEvent) => void): void;
  onFollow(callback: (user: TikTokUserEvent) => void): void;
  onMemberJoin(callback: (user: TikTokUserEvent) => void): void;
}
