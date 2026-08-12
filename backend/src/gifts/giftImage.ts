/** Pull first usable image URL from TikTok gift / catalog shapes. */
export function extractGiftImageUrl(raw: unknown): string | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const obj = raw as Record<string, unknown>;

  const direct = asHttpUrl(obj.giftPictureUrl ?? obj.pictureUrl ?? obj.iconUrl);
  if (direct) return direct;

  const details = obj.giftDetails as Record<string, unknown> | undefined;
  if (details) {
    const fromDetails =
      fromImageLike(details.giftImage) ??
      fromImageLike(details.icon) ??
      fromImageLike(details.previewImage) ??
      fromImageLike(details.giftLabelIcon);
    if (fromDetails) return fromDetails;
  }

  const fromExtended = fromImageLike(
    (obj.extendedGiftInfo as Record<string, unknown> | undefined)?.icon ??
      (obj.extendedGiftInfo as Record<string, unknown> | undefined)?.image ??
      (obj.extendedGiftInfo as Record<string, unknown> | undefined)?.gift_image,
  );
  if (fromExtended) return fromExtended;

  const gift = obj.gift as Record<string, unknown> | undefined;
  if (gift) {
    const fromGift =
      fromImageLike(gift.image) ??
      fromImageLike(gift.icon) ??
      fromImageLike(gift.giftImage);
    if (fromGift) return fromGift;
  }

  // Catalog item may be the gift object itself
  return (
    fromImageLike(obj.giftImage) ??
    fromImageLike(obj.icon) ??
    fromImageLike(obj.previewImage)
  );
}

function fromImageLike(value: unknown): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return asHttpUrl(value);
  if (typeof value !== "object") return undefined;
  const img = value as Record<string, unknown>;

  // tiktok-live-connector Image: { url: string[] }
  // ImageModel: { mUrls: string[] }
  // legacy / raw: url_list / urlList
  const list =
    (Array.isArray(img.url) ? img.url : undefined) ??
    (Array.isArray(img.mUrls) ? img.mUrls : undefined) ??
    (Array.isArray(img.url_list) ? img.url_list : undefined) ??
    (Array.isArray(img.uri_list) ? img.uri_list : undefined) ??
    (Array.isArray(img.urlList) ? img.urlList : undefined);

  if (Array.isArray(list)) {
    for (const item of list) {
      const url = asHttpUrl(item);
      if (url) return url;
    }
  }

  return asHttpUrl(img.url ?? img.uri ?? img.mUri);
}

function asHttpUrl(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const s = value.trim();
  if (!s) return undefined;
  if (s.startsWith("//")) return `https:${s}`;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  // TikTok sometimes returns bare CDN paths
  if (s.includes("tiktokcdn") || s.includes("webcast")) {
    return s.startsWith("/") ? `https://p16-webcast.tiktokcdn.com${s}` : `https://${s}`;
  }
  return undefined;
}
