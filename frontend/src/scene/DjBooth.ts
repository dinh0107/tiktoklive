import * as THREE from "three";
import { getDjTexture } from "../characters/characterArt";

/** Center outdoor stage height. */
export const STAGE_TOP = 1.45;

/**
 * Center-stage DJ booth for outdoor open-air set.
 */
export class DjBooth {
  readonly root = new THREE.Group();

  private readonly djVisual: THREE.Group;
  private readonly deckMats: THREE.MeshStandardMaterial[] = [];
  private readonly eqLights: THREE.Mesh[] = [];
  private readonly djBaseY: number;
  private hypeUntil = 0;

  constructor() {
    this.root.name = "DjBooth";
    this.root.position.set(0, 0, -5.4);

    this.addPlatform();
    this.addStairs();
    this.addDesk();
    this.addDecks();
    this.addSpeakers();
    this.addNeon();
    this.djBaseY = STAGE_TOP + 1.15;
    this.djVisual = this.addDjSprite();
  }

  update(time: number): void {
    // Always a bit hype — outdoor set never "stands still"
    const hype = performance.now() < this.hypeUntil;
    const beat = time * ((128 / 60) * Math.PI);
    const bobSpeed = hype ? 9 : 6.5;
    const bob = Math.sin(time * bobSpeed) * (hype ? 0.09 : 0.05);
    this.djVisual.position.y = this.djBaseY + bob;
    this.djVisual.rotation.z = Math.sin(beat) * (hype ? 0.12 : 0.06);
    this.djVisual.rotation.y = Math.sin(beat * 0.5) * 0.05;

    for (let i = 0; i < this.deckMats.length; i++) {
      const on = Math.sin(beat * 2 + i * 2) > -0.2;
      this.deckMats[i]!.emissiveIntensity = on ? (hype ? 2.2 : 1.5) : 0.25;
    }
    for (let i = 0; i < this.eqLights.length; i++) {
      const mat = this.eqLights[i]!.material as THREE.MeshStandardMaterial;
      const h =
        0.05 +
        (Math.sin(beat * 3 + i * 1.7) * 0.5 + 0.5) * (hype ? 0.6 : 0.45);
      this.eqLights[i]!.scale.y = h / 0.08;
      this.eqLights[i]!.position.y = STAGE_TOP + 0.55 + h / 2;
      mat.emissiveIntensity = Math.sin(beat * 4 + i) > 0 ? 1.8 : 0.35;
    }
  }

  requestBeat(seconds = 4): void {
    this.hypeUntil = performance.now() + seconds * 1000;
  }

  private addPlatform(): void {
    // Outdoor plywood — shallower so front lip stays behind the crowd
    const wood = new THREE.MeshStandardMaterial({
      color: 0x8a6238,
      roughness: 0.7,
      metalness: 0.06,
      emissive: 0x3a2208,
      emissiveIntensity: 0.15,
    });
    const stage = new THREE.Mesh(new THREE.BoxGeometry(8.2, STAGE_TOP, 3.2), wood);
    stage.position.set(0, STAGE_TOP / 2, -0.4);
    this.root.add(stage);

    // Front LED lip only (no stairs into crowd)
    const lip = new THREE.Mesh(
      new THREE.BoxGeometry(8.3, 0.1, 0.1),
      new THREE.MeshStandardMaterial({
        color: 0xff2d8a,
        emissive: 0xff2d8a,
        emissiveIntensity: 1.1,
      }),
    );
    this.deckMats.push(lip.material as THREE.MeshStandardMaterial);
    lip.position.set(0, STAGE_TOP + 0.02, 1.25);
    this.root.add(lip);

    // Soft front face glow strip (reads as stage, not black wall)
    const face = new THREE.Mesh(
      new THREE.PlaneGeometry(8.0, STAGE_TOP * 0.85),
      new THREE.MeshStandardMaterial({
        color: 0x1a1020,
        emissive: 0xff4fa3,
        emissiveIntensity: 0.35,
        roughness: 0.6,
      }),
    );
    face.position.set(0, STAGE_TOP * 0.45, 1.22);
    this.root.add(face);

    const poleMat = new THREE.MeshStandardMaterial({
      color: 0x888898,
      metalness: 0.85,
      roughness: 0.25,
    });
    for (const x of [-3.8, 3.8] as const) {
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.09, 3.6, 8),
        poleMat,
      );
      pole.position.set(x, STAGE_TOP + 1.8, -1.4);
      this.root.add(pole);
    }
  }

  private addStairs(): void {
    // ponytail: no stairs — they were the black boxes covering crowd legs
  }

  private addDesk(): void {
    // Low slim console — keep DJ face clear above the deck
    const y = STAGE_TOP;
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.32, 0.7),
      new THREE.MeshStandardMaterial({
        color: 0x14101c,
        roughness: 0.4,
        metalness: 0.45,
      }),
    );
    desk.position.set(0, y + 0.2, -0.35);
    this.root.add(desk);

    const top = new THREE.Mesh(
      new THREE.BoxGeometry(2.7, 0.05, 0.78),
      new THREE.MeshStandardMaterial({
        color: 0x0c0a12,
        roughness: 0.2,
        metalness: 0.7,
      }),
    );
    top.position.set(0, y + 0.38, -0.35);
    this.root.add(top);
  }

  private addDecks(): void {
    const y = STAGE_TOP + 0.42;
    for (const x of [-0.7, 0.7] as const) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0x222033,
        emissive: x < 0 ? 0xff2d8a : 0x2de0ff,
        emissiveIntensity: 0.55,
        metalness: 0.55,
        roughness: 0.3,
      });
      this.deckMats.push(mat);
      const deck = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 0.05, 20),
        mat,
      );
      deck.position.set(x, y, -0.15);
      this.root.add(deck);
    }

    // Tiny EQ dots behind deck — not tall bars in front of DJ face
    const colors = [0xff2d8a, 0xffe066, 0x2de0ff, 0xb6ff3b, 0xff8a4a];
    for (let i = 0; i < 5; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.8,
      });
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.06), mat);
      bar.position.set(-0.2 + i * 0.1, STAGE_TOP + 0.55, -0.55);
      this.eqLights.push(bar);
      this.root.add(bar);
    }
  }

  private addSpeakers(): void {
    // Low monitors beside console — not tall cabinets covering DJ
    const mat = new THREE.MeshStandardMaterial({
      color: 0x1a1424,
      roughness: 0.55,
      metalness: 0.3,
    });
    for (const x of [-1.7, 1.7] as const) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.55, 0.4), mat);
      body.position.set(x, STAGE_TOP + 0.35, -0.5);
      this.root.add(body);
      const cone = new THREE.Mesh(
        new THREE.CircleGeometry(0.14, 16),
        new THREE.MeshStandardMaterial({
          color: 0x333044,
          emissive: 0x2de0ff,
          emissiveIntensity: 0.25,
        }),
      );
      cone.position.set(x, STAGE_TOP + 0.4, -0.28);
      this.root.add(cone);
    }
  }

  private addNeon(): void {
    const canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 96;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, 320, 96);
    ctx.fillStyle = "#2DE0FF";
    ctx.shadowColor = "#2DE0FF";
    ctx.shadowBlur = 16;
    ctx.font = "bold 52px Impact, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("OPEN AIR", 160, 50);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    sign.position.set(0, STAGE_TOP + 3.1, -1.0);
    sign.scale.set(3.2, 0.95, 1);
    this.root.add(sign);
  }

  private addDjSprite(): THREE.Group {
    const group = new THREE.Group();
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: getDjTexture(),
        transparent: true,
        depthTest: true,
        depthWrite: false,
        alphaTest: 0.08,
      }),
    );
    sprite.scale.set(1.9, 2.45, 1);
    group.add(sprite);

    const tagCanvas = document.createElement("canvas");
    tagCanvas.width = 240;
    tagCanvas.height = 64;
    const tctx = tagCanvas.getContext("2d");
    if (tctx) {
      tctx.fillStyle = "rgba(10,6,18,0.82)";
      tctx.beginPath();
      tctx.roundRect(8, 12, 224, 40, 12);
      tctx.fill();
      tctx.strokeStyle = "#2DE0FF";
      tctx.lineWidth = 2;
      tctx.stroke();
      tctx.fillStyle = "#FFF8EE";
      tctx.font = "bold 22px Segoe UI, sans-serif";
      tctx.textAlign = "center";
      tctx.textBaseline = "middle";
      tctx.fillText("DJ MEME", 120, 34);
      const tex = new THREE.CanvasTexture(tagCanvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      const tag = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: tex,
          transparent: true,
          depthTest: false,
        }),
      );
      tag.scale.set(1.3, 0.35, 1);
      tag.position.set(0, 1.25, 0.02);
      group.add(tag);
    }

    // Slightly forward so face clears the console from camera
    group.position.set(0, this.djBaseY, 0.75);
    this.root.add(group);
    return group;
  }
}
