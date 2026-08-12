import * as THREE from "three";
import { gsap } from "gsap";
import type {
  CharacterAnimation,
  CharacterData,
  CharacterState,
} from "./character.types";
import { accentForSeed, materialForSeed } from "./characterArt";
import { isDanceFloorSlot } from "./slots";

/**
 * Illustrated sprite character (preloaded art).
 * Idle is clock-driven (no per-character GSAP loops).
 */
export class Character {
  readonly data: CharacterData;
  readonly root: THREE.Group;

  private readonly visual: THREE.Group;
  private readonly sprite: THREE.Sprite;
  private nameSprite: THREE.Sprite | null;
  private animTween: gsap.core.Timeline | null = null;
  private readonly seed: number;
  private idleActive = false;
  private readonly idlePhase: number;
  private readonly idleStyle: number; // 0 bounce, 1 sway, 2 double-time
  private readonly idleJumpH: number;
  private readonly sharedBodyMat: boolean;
  private readonly accent: string;
  private spotlightRing: THREE.Mesh | null = null;
  private spotlightUntil = 0;
  private visiting = false;

  constructor(data: CharacterData, opts?: { showNameTag?: boolean }) {
    this.data = data;
    this.seed = hash(data.id);
    this.idlePhase = (this.seed % 8) * 0.37;
    this.idleStyle = this.seed % 3;
    this.idleJumpH = isDanceFloorSlot(data.position) ? 0.2 : 0.14;
    this.accent = accentForSeed(this.seed);

    this.root = new THREE.Group();
    this.root.name = data.id;
    this.root.position.set(data.position.x, data.position.y, data.position.z);

    this.visual = new THREE.Group();
    this.root.add(this.visual);

    const mat = materialForSeed(this.seed);
    this.sharedBodyMat = true;

    this.sprite = new THREE.Sprite(mat);
    this.sprite.scale.set(1.7, 2.25, 1);
    this.sprite.position.y = 1.15;
    this.visual.add(this.sprite);

    if (opts?.showNameTag !== false) {
      this.nameSprite = createNameSprite(data.username, this.accent, false);
      this.nameSprite.position.set(0, 2.45, 0.02);
      this.visual.add(this.nameSprite);
    } else {
      this.nameSprite = null;
    }
  }

  getWorldPosition(target = new THREE.Vector3()): THREE.Vector3 {
    this.root.getWorldPosition(target);
    target.y += 1.2;
    return target;
  }

  setState(state: CharacterState): void {
    this.data.state = state;
  }

  /** Party dance idle — clock-driven, no GSAP loops. */
  updateIdle(time: number): void {
    if (this.spotlightRing && performance.now() < this.spotlightUntil) {
      const pulse = 0.55 + (Math.sin(time * 8) * 0.5 + 0.5) * 0.45;
      const mat = this.spotlightRing.material as THREE.MeshBasicMaterial;
      mat.opacity = pulse;
      this.spotlightRing.rotation.z = time * 1.5;
    } else if (this.spotlightRing) {
      this.spotlightRing.visible = false;
    }

    if (!this.idleActive || this.animTween || this.visiting) return;

    // ~128 BPM shared with lights / floor
    const beat = time * ((128 / 60) * Math.PI) + this.idlePhase;
    const kick = Math.abs(Math.sin(beat)); // sharp hop on every beat
    const sway = Math.sin(beat * 0.5);

    if (this.idleStyle === 0) {
      // Bounce / jump
      this.root.position.y = this.data.position.y + kick * this.idleJumpH;
      this.visual.rotation.z = sway * 0.1;
      this.visual.rotation.y = sway * 0.06;
      const squash = kick * 0.12;
      this.visual.scale.set(1 + squash * 0.7, 1 - squash, 1);
    } else if (this.idleStyle === 1) {
      // Side sway + soft hop
      this.root.position.y =
        this.data.position.y + kick * this.idleJumpH * 0.65;
      this.visual.rotation.z = sway * 0.22;
      this.visual.rotation.y = Math.sin(beat * 0.35) * 0.1;
      this.visual.scale.set(1 + kick * 0.04, 1 - kick * 0.06, 1);
    } else {
      // Double-time bob + lean
      const kick2 = Math.abs(Math.sin(beat * 2));
      this.root.position.y =
        this.data.position.y + kick2 * this.idleJumpH * 0.85;
      this.visual.rotation.z = Math.sin(beat * 2) * 0.14;
      this.visual.rotation.y = sway * 0.08;
      this.visual.scale.set(1 + kick2 * 0.08, 1 - kick2 * 0.1, 1);
    }
  }

  /** #1 Spotlight — bright nametag + floor ring while camera focuses. */
  spotlight(seconds = 3.2): void {
    this.ensureNameTag(true);
    this.ensureSpotlightRing();
    this.spotlightUntil = performance.now() + seconds * 1000;
    this.spotlightRing!.visible = true;

    if (this.nameSprite) {
      gsap.killTweensOf(this.nameSprite.scale);
      gsap.fromTo(
        this.nameSprite.scale,
        { x: 1.65, y: 0.4 },
        {
          x: 2.15,
          y: 0.52,
          duration: 0.35,
          yoyo: true,
          repeat: 5,
          ease: "sine.inOut",
        },
      );
    }
  }

  /**
   * #3 Visit DJ booth then walk back to seat.
   * Slot near booth kept clear of permanent seats.
   */
  visitDj(holdSeconds = 2.4): Promise<void> {
    this.visiting = true;
    this.killIdle();
    const homeX = this.data.position.x;
    const homeZ = this.data.position.z;
    const homeY = this.data.position.y;
    // Front of center stage (booth at 0, -5.4)
    const dx = 0;
    const dz = -2.8;

    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          this.visiting = false;
          this.root.position.set(homeX, homeY, homeZ);
          this.startIdle();
          resolve();
        },
      });
      tl.to(this.root.position, {
        x: dx,
        z: dz,
        y: homeY,
        duration: 0.55,
        ease: "power2.out",
      })
        .to(this.visual.rotation, { z: 0.12, yoyo: true, repeat: 5, duration: 0.12 }, 0.4)
        .to({}, { duration: holdSeconds })
        .to(this.root.position, {
          x: homeX,
          z: homeZ,
          y: homeY,
          duration: 0.55,
          ease: "power2.inOut",
        });
    });
  }

  private ensureNameTag(spotlightStyle: boolean): void {
    if (this.nameSprite) {
      if (spotlightStyle) {
        const map = this.nameSprite.material.map;
        this.nameSprite.material.dispose();
        map?.dispose();
        const fresh = createNameSprite(this.data.username, this.accent, true);
        fresh.position.copy(this.nameSprite.position);
        this.visual.remove(this.nameSprite);
        this.nameSprite = fresh;
        this.visual.add(fresh);
      }
      return;
    }
    this.nameSprite = createNameSprite(
      this.data.username,
      this.accent,
      spotlightStyle,
    );
    this.nameSprite.position.set(0, 2.45, 0.02);
    this.visual.add(this.nameSprite);
  }

  private ensureSpotlightRing(): void {
    if (this.spotlightRing) return;
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffe0a0,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.35, 0.55, 24), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.04;
    this.root.add(ring);
    this.spotlightRing = ring;
  }

  playAnimation(name: CharacterAnimation): Promise<void> {
    this.stopCurrentAnim();
    console.log(`[ANIMATION] ${name}`);

    if (name === "idle") {
      this.setState("idle");
      this.startIdle();
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          this.animTween = null;
          this.setState("idle");
          this.startIdle();
          resolve();
        },
      });
      this.animTween = tl;
      this.setState(mapAnimToState(name));
      const baseY = this.data.position.y;

      switch (name) {
        case "drink": {
          // Toast: tip back → sip hold → happy wobble
          const baseX = this.root.position.x;
          tl.to(this.visual.scale, { x: 1.08, y: 0.88, duration: 0.15, ease: "power2.in" })
            .to(this.visual.rotation, { z: -0.28, duration: 0.22, ease: "back.out(2)" }, 0)
            .to(this.visual.rotation, { z: 0.42, duration: 0.35, ease: "power2.out" })
            .to(this.visual.scale, { x: 0.92, y: 1.12, duration: 0.35, ease: "power2.out" }, "<")
            .to(this.root.position, { y: baseY + 0.08, duration: 0.35 }, "<")
            .to({}, { duration: 0.35 })
            .to(this.visual.rotation, { z: 0.08, duration: 0.2 })
            .to(this.visual.scale, { x: 1.12, y: 0.9, duration: 0.12, yoyo: true, repeat: 3 })
            .to(this.root.position, {
              x: baseX + 0.12,
              duration: 0.1,
              yoyo: true,
              repeat: 3,
              ease: "sine.inOut",
            }, "<")
            .to(this.visual.rotation, { z: 0, duration: 0.25, ease: "back.out(1.5)" })
            .to(this.visual.scale, { x: 1, y: 1, duration: 0.25 }, "<")
            .to(this.root.position, { x: baseX, y: baseY, duration: 0.25 }, "<");
          break;
        }
        case "dance": {
          // Groove: sway + spin-lean + stomps (distinct from celebrate)
          const baseX = this.root.position.x;
          for (let i = 0; i < 4; i++) {
            const t = i * 0.42;
            const side = i % 2 === 0 ? 1 : -1;
            tl.to(
              this.root.position,
              { x: baseX + side * 0.28, duration: 0.18, ease: "power2.out" },
              t,
            )
              .to(
                this.visual.rotation,
                { z: side * -0.35, duration: 0.18, ease: "power2.out" },
                t,
              )
              .to(
                this.visual.scale,
                { x: 1.15, y: 0.82, duration: 0.1, ease: "power2.in" },
                t,
              )
              .to(
                this.root.position,
                { y: baseY + 0.32, duration: 0.16, ease: "power1.out" },
                t + 0.1,
              )
              .to(
                this.visual.scale,
                { x: 0.88, y: 1.18, duration: 0.16, ease: "sine.out" },
                t + 0.1,
              )
              .to(
                this.root.position,
                { y: baseY, duration: 0.14, ease: "power2.in" },
                t + 0.26,
              )
              .to(
                this.visual.scale,
                { x: 1.1, y: 0.9, duration: 0.08 },
                t + 0.28,
              );
          }
          tl.to(this.root.position, { x: baseX, duration: 0.2, ease: "back.out(1.4)" })
            .to(this.visual.rotation, { z: 0, duration: 0.2 }, "<")
            .to(this.visual.scale, { x: 1, y: 1, duration: 0.2 }, "<");
          break;
        }
        case "surprised": {
          // Freeze → BOING pop → vibrate
          tl.to(this.visual.scale, { x: 1.25, y: 0.55, duration: 0.12, ease: "power3.in" })
            .to(this.visual.scale, {
              x: 0.7,
              y: 1.45,
              duration: 0.18,
              ease: "back.out(4)",
            })
            .to(
              this.root.position,
              { y: baseY + 0.75, duration: 0.22, ease: "power2.out" },
              "<",
            )
            .to(this.visual.rotation, {
              z: 0.45,
              duration: 0.06,
              yoyo: true,
              repeat: 7,
              ease: "steps(1)",
            })
            .to(this.root.position, {
              y: baseY,
              duration: 0.45,
              ease: "bounce.out",
            })
            .to(this.visual.scale, { x: 1.2, y: 0.85, duration: 0.12 }, "<")
            .to(this.visual.scale, { x: 1, y: 1, duration: 0.2, ease: "back.out(2)" })
            .to(this.visual.rotation, { z: 0, duration: 0.15 }, "<");
          break;
        }
        case "celebrate": {
          // Hype finale: rocket hops + wild leans + big pop
          const baseX = this.root.position.x;
          tl.to(this.visual.scale, { x: 0.75, y: 1.3, duration: 0.12, ease: "power2.in" })
            .to(this.root.position, {
              y: baseY + 0.95,
              duration: 0.28,
              ease: "power2.out",
            })
            .to(this.visual.scale, { x: 1.25, y: 0.8, duration: 0.28 }, "<")
            .to(this.visual.rotation, {
              z: 0.55,
              duration: 0.1,
              yoyo: true,
              repeat: 9,
              ease: "sine.inOut",
            }, 0.1)
            .to(this.root.position, {
              x: baseX + 0.35,
              duration: 0.12,
              yoyo: true,
              repeat: 7,
              ease: "sine.inOut",
            }, 0.15)
            .to(this.root.position, {
              y: baseY + 0.55,
              duration: 0.18,
              yoyo: true,
              repeat: 5,
              ease: "power1.inOut",
            }, 0.25)
            .to(this.visual.scale, {
              x: 1.45,
              y: 1.45,
              duration: 0.22,
              ease: "back.out(3)",
            })
            .to(this.visual.scale, { x: 1, y: 1, duration: 0.35, ease: "elastic.out(1,0.4)" })
            .to(this.root.position, { x: baseX, y: baseY, duration: 0.3, ease: "power2.out" }, "<")
            .to(this.visual.rotation, { z: 0, duration: 0.25 }, "<");
          break;
        }
      }
    });
  }

  playSpawn(): Promise<void> {
    this.killIdle();
    this.visual.scale.set(0, 0, 0);
    return new Promise((resolve) => {
      gsap.to(this.visual.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        ease: "back.out(2)",
        onComplete: () => {
          this.startIdle();
          resolve();
        },
      });
    });
  }

  resumeIdle(): void {
    this.startIdle();
  }

  dispose(): void {
    this.stopCurrentAnim();
    this.root.parent?.remove(this.root);
    if (!this.sharedBodyMat) {
      this.sprite.material.dispose();
    }
    if (this.nameSprite) {
      const nameMap = this.nameSprite.material.map;
      this.nameSprite.material.dispose();
      nameMap?.dispose();
    }
    if (this.spotlightRing) {
      (this.spotlightRing.material as THREE.Material).dispose();
      this.spotlightRing.geometry.dispose();
    }
  }

  private startIdle(): void {
    this.idleActive = true;
  }

  private killIdle(): void {
    this.idleActive = false;
  }

  private stopCurrentAnim(): void {
    this.killIdle();
    this.animTween?.kill();
    this.animTween = null;
    this.root.position.y = this.data.position.y;
    if (!this.visiting) {
      this.root.position.x = this.data.position.x;
      // z stays; visitDj owns z while away
    }
    this.visual.rotation.set(0, 0, 0);
    this.visual.scale.set(1, 1, 1);
  }
}

function mapAnimToState(name: CharacterAnimation): CharacterState {
  switch (name) {
    case "drink":
      return "drinking";
    case "dance":
      return "dancing";
    case "surprised":
      return "surprised";
    case "celebrate":
      return "celebrating";
    default:
      return "idle";
  }
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function createNameSprite(
  username: string,
  accent: string,
  spotlight = false,
): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xffffff }));
  }
  ctx.clearRect(0, 0, 256, 64);
  if (spotlight) {
    ctx.shadowColor = accent;
    ctx.shadowBlur = 18;
    ctx.fillStyle = "rgba(40, 20, 10, 0.92)";
  } else {
    ctx.fillStyle = "rgba(10,6,18,0.82)";
  }
  ctx.beginPath();
  ctx.roundRect(8, 12, 240, 40, 14);
  ctx.fill();
  ctx.strokeStyle = spotlight ? "#FFE8A0" : accent;
  ctx.lineWidth = spotlight ? 4 : 3;
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = spotlight ? "#FFE8A0" : "#FFF8EE";
  ctx.font = "bold 22px Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const label = username.startsWith("@") ? username : `@${username}`;
  ctx.fillText(label.slice(0, 16), 128, 34);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
    }),
  );
  sprite.scale.set(1.65, 0.4, 1);
  return sprite;
}
