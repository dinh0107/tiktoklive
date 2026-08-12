import * as THREE from "three";
import { gsap } from "gsap";
import type { Character } from "../characters/Character";

export type CameraMode = "GLOBAL_VIEW" | "FOCUS_CHARACTER";

export class CameraController {
  readonly camera: THREE.PerspectiveCamera;

  private readonly globalPosition = new THREE.Vector3(0, 5.6, 11.5);
  private readonly globalLookAt = new THREE.Vector3(0, 2.0, -3.2);
  private readonly lookTarget = new THREE.Vector3(0, 2.0, -3.2);
  private animating = false;
  private focusHold: gsap.core.Tween | null = null;
  private timeline: gsap.core.Timeline | null = null;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(46, aspect, 0.1, 200);
    this.camera.position.copy(this.globalPosition);
    this.camera.lookAt(this.lookTarget);
  }

  isAnimating(): boolean {
    return this.animating;
  }

  getMode(): CameraMode {
    return this.animating ? "FOCUS_CHARACTER" : "GLOBAL_VIEW";
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  update(): void {
    this.camera.lookAt(this.lookTarget);
  }

  focusCharacter(
    character: Character,
    holdSeconds = 2.5,
    drama: 1 | 2 = 1,
  ): Promise<void> {
    console.log(`[CAMERA] Focus ${character.data.id} (drama=${drama})`);
    // Stable seat slot — avoids hop jitter
    const slot = character.data.position;
    return this.focusPoint(slot.x, slot.y + 1.35, slot.z, holdSeconds, drama);
  }

  /** Focus a world point (e.g. DJ booth during request). */
  focusPoint(
    x: number,
    y: number,
    z: number,
    holdSeconds = 2.5,
    drama: 1 | 2 = 1,
  ): Promise<void> {
    this.timeline?.kill();
    this.focusHold?.kill();

    const closer = drama === 2;
    const camPos = {
      x: x + (closer ? 0.45 : 0.95),
      y: y + (closer ? 0.35 : 0.55),
      z: z + (closer ? 2.45 : 3.25),
    };
    const look = { x, y, z };

    this.animating = true;

    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          this.focusHold = gsap.delayedCall(holdSeconds, () => {
            void this.resetToGlobal().then(resolve);
          });
        },
      });
      this.timeline = tl;

      const dur = closer ? 1.0 : 1.15;
      tl.to(
        this.camera.position,
        {
          x: camPos.x,
          y: camPos.y,
          z: camPos.z,
          duration: dur,
          ease: "power2.inOut",
        },
        0,
      );
      tl.to(
        this.lookTarget,
        {
          x: look.x,
          y: look.y,
          z: look.z,
          duration: dur,
          ease: "power2.inOut",
        },
        0,
      );
    });
  }

  resetToGlobal(): Promise<void> {
    this.focusHold?.kill();
    this.focusHold = null;
    this.timeline?.kill();

    this.animating = true;
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          this.animating = false;
          this.timeline = null;
          resolve();
        },
      });
      this.timeline = tl;
      tl.to(this.camera.position, {
        x: this.globalPosition.x,
        y: this.globalPosition.y,
        z: this.globalPosition.z,
        duration: 1.0,
        ease: "power2.inOut",
      }, 0);
      tl.to(this.lookTarget, {
        x: this.globalLookAt.x,
        y: this.globalLookAt.y,
        z: this.globalLookAt.z,
        duration: 1.0,
        ease: "power2.inOut",
      }, 0);
    });
  }

  /** Immediate snap — used by RESET CAMERA when not mid-queue. */
  snapToGlobal(): void {
    this.timeline?.kill();
    this.focusHold?.kill();
    this.timeline = null;
    this.focusHold = null;
    this.camera.position.copy(this.globalPosition);
    this.lookTarget.copy(this.globalLookAt);
    this.animating = false;
  }
}
