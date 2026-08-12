import { gsap } from "gsap";

export interface GiftNotificationPayload {
  title: string;
  subtitle: string;
}

export class GiftNotification {
  private readonly root: HTMLElement;
  private readonly card: HTMLElement;
  private readonly titleEl: HTMLElement;
  private readonly subtitleEl: HTMLElement;
  private hideTween: gsap.core.Tween | null = null;

  constructor(parent: HTMLElement) {
    this.root = document.createElement("div");
    this.root.className = "gift-notification-root";
    this.root.innerHTML = `
      <div class="gift-notification-card" data-card>
        <div class="gift-notification-title" data-title></div>
        <div class="gift-notification-subtitle" data-subtitle></div>
      </div>
    `;
    parent.appendChild(this.root);

    this.card = this.root.querySelector("[data-card]")!;
    this.titleEl = this.root.querySelector("[data-title]")!;
    this.subtitleEl = this.root.querySelector("[data-subtitle]")!;
    gsap.set(this.card, { autoAlpha: 0, scale: 0.85 });
  }

  show(payload: GiftNotificationPayload): void {
    this.hideTween?.kill();
    this.titleEl.textContent = payload.title;
    this.subtitleEl.textContent = payload.subtitle;

    gsap.killTweensOf(this.card);
    gsap.fromTo(
      this.card,
      { autoAlpha: 0, scale: 0.85, y: 12 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.35, ease: "back.out(1.6)" },
    );

    this.hideTween = gsap.delayedCall(2.4, () => {
      gsap.to(this.card, {
        autoAlpha: 0,
        scale: 0.92,
        duration: 0.3,
        ease: "power2.in",
      });
    });
  }

  shake(): void {
    gsap.fromTo(
      this.root,
      { x: 0 },
      { x: 8, duration: 0.05, yoyo: true, repeat: 7, ease: "power1.inOut" },
    );
  }
}
