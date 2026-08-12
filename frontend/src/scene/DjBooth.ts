import * as THREE from "three";
import { getDjTexture } from "../characters/characterArt";

/** Center outdoor stage height. */
export const STAGE_TOP = 1.35;

/**
 * Center-stage DJ booth — festival riser look, DJ face kept clear.
 */
export class DjBooth {
  readonly root = new THREE.Group();

  private readonly djVisual: THREE.Group;
  private readonly deckMats: THREE.MeshStandardMaterial[] = [];
  private readonly eqLights: THREE.Mesh[] = [];
  private readonly fasciaMats: THREE.MeshStandardMaterial[] = [];
  private readonly djBaseY: number;
  private hypeUntil = 0;

  constructor() {
    this.root.name = "DjBooth";
    this.root.position.set(0, 0, -5.4);

    this.addPlatform();
    this.addFascia();
    this.addDesk();
    this.addDecks();
    this.addMonitors();
    this.djBaseY = STAGE_TOP + 1.2;
    this.djVisual = this.addDjSprite();
  }

  update(time: number): void {
    const hype = performance.now() < this.hypeUntil;
    const beat = time * ((128 / 60) * Math.PI);
    const kick = Math.abs(Math.sin(beat));
    const hard = kick > 0.82 ? 1 : kick;

    const bobSpeed = hype ? 9 : 6.5;
    const bob = Math.sin(time * bobSpeed) * (hype ? 0.09 : 0.05);
    this.djVisual.position.y = this.djBaseY + bob;
    this.djVisual.rotation.z = Math.sin(beat) * (hype ? 0.12 : 0.06);
    this.djVisual.rotation.y = Math.sin(beat * 0.5) * 0.05;

    for (let i = 0; i < this.deckMats.length; i++) {
      const on = Math.sin(beat * 2 + i * 2) > -0.2;
      this.deckMats[i]!.emissiveIntensity = on ? (hype ? 2.4 : 1.6) : 0.3;
    }
    for (let i = 0; i < this.eqLights.length; i++) {
      const mat = this.eqLights[i]!.material as THREE.MeshStandardMaterial;
      const h =
        0.06 +
        (Math.sin(beat * 3.2 + i * 1.7) * 0.5 + 0.5) * (hype ? 0.7 : 0.5);
      this.eqLights[i]!.scale.y = h / 0.08;
      this.eqLights[i]!.position.y = STAGE_TOP + 0.52 + h / 2;
      mat.emissiveIntensity = Math.sin(beat * 4 + i) > 0 ? 2.2 : 0.4;
    }
    for (let i = 0; i < this.fasciaMats.length; i++) {
      const pulse = Math.abs(Math.sin(beat * 2 + i * 0.85));
      this.fasciaMats[i]!.emissiveIntensity =
        0.45 + pulse * (1.4 + hard * 1.2);
      this.fasciaMats[i]!.emissive.setHSL(
        (time * 0.18 + i * 0.11) % 1,
        0.95,
        0.5,
      );
    }
  }

  requestBeat(seconds = 4): void {
    this.hypeUntil = performance.now() + seconds * 1000;
  }

  private addPlatform(): void {
    // Dark stage deck
    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(9.2, STAGE_TOP, 3.6),
      new THREE.MeshStandardMaterial({
        color: 0x1a1520,
        roughness: 0.55,
        metalness: 0.25,
        emissive: 0x120818,
        emissiveIntensity: 0.25,
      }),
    );
    deck.position.set(0, STAGE_TOP / 2, -0.35);
    this.root.add(deck);

    // Glossy top plate
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(9.15, 0.06, 3.55),
      new THREE.MeshStandardMaterial({
        color: 0x2a2438,
        roughness: 0.22,
        metalness: 0.55,
        emissive: 0x1a1030,
        emissiveIntensity: 0.2,
      }),
    );
    top.position.set(0, STAGE_TOP + 0.02, -0.35);
    this.root.add(top);

    // Chrome edge rails
    const chrome = new THREE.MeshStandardMaterial({
      color: 0xd0d4e0,
      metalness: 0.95,
      roughness: 0.18,
    });
    for (const z of [1.4, -2.1] as const) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(9.3, 0.06, 0.08), chrome);
      rail.position.set(0, STAGE_TOP + 0.05, z);
      this.root.add(rail);
    }
    for (const x of [-4.55, 4.55] as const) {
      const side = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 3.6), chrome);
      side.position.set(x, STAGE_TOP + 0.05, -0.35);
      this.root.add(side);
    }

    // Side wedges (festival wings)
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0x121018,
      roughness: 0.5,
      metalness: 0.35,
      emissive: 0xff2d8a,
      emissiveIntensity: 0.2,
    });
    for (const x of [-5.35, 5.35] as const) {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(1.3, STAGE_TOP * 0.85, 2.4), wingMat);
      wing.position.set(x, (STAGE_TOP * 0.85) / 2, -0.2);
      this.root.add(wing);
    }
  }

  private addFascia(): void {
    // Front LED panel strip — reads as lit stage skirt
    const colors = [0xff2d8a, 0x2de0ff, 0xffe066, 0xb06bff, 0xff8a4a, 0x7cffb0];
    const n = 10;
    const w = 8.6 / n;
    for (let i = 0; i < n; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0x101018,
        emissive: colors[i % colors.length],
        emissiveIntensity: 0.9,
        roughness: 0.25,
        metalness: 0.5,
      });
      this.fasciaMats.push(mat);
      const panel = new THREE.Mesh(new THREE.BoxGeometry(w * 0.92, STAGE_TOP * 0.78, 0.08), mat);
      panel.position.set(-4.1 + w * (i + 0.5), STAGE_TOP * 0.42, 1.42);
      this.root.add(panel);
    }

    // Hot pink lip line
    const lip = new THREE.Mesh(
      new THREE.BoxGeometry(9.0, 0.08, 0.1),
      new THREE.MeshStandardMaterial({
        color: 0xff2d8a,
        emissive: 0xff2d8a,
        emissiveIntensity: 1.4,
      }),
    );
    this.deckMats.push(lip.material as THREE.MeshStandardMaterial);
    lip.position.set(0, STAGE_TOP + 0.04, 1.45);
    this.root.add(lip);
  }

  private addDesk(): void {
    const y = STAGE_TOP;
    // Console body
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(2.9, 0.38, 0.78),
      new THREE.MeshStandardMaterial({
        color: 0x12101a,
        roughness: 0.35,
        metalness: 0.55,
      }),
    );
    desk.position.set(0, y + 0.22, -0.25);
    this.root.add(desk);

    // Gloss top
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 0.05, 0.85),
      new THREE.MeshStandardMaterial({
        color: 0x0a0810,
        roughness: 0.15,
        metalness: 0.8,
      }),
    );
    top.position.set(0, y + 0.42, -0.25);
    this.root.add(top);

    // Neon under-glow
    const glow = new THREE.Mesh(
      new THREE.BoxGeometry(2.85, 0.04, 0.7),
      new THREE.MeshStandardMaterial({
        color: 0x2de0ff,
        emissive: 0x2de0ff,
        emissiveIntensity: 1.1,
      }),
    );
    this.deckMats.push(glow.material as THREE.MeshStandardMaterial);
    glow.position.set(0, y + 0.02, -0.25);
    this.root.add(glow);
  }

  private addDecks(): void {
    const y = STAGE_TOP + 0.46;
    for (const x of [-0.75, 0.75] as const) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0x1c1a28,
        emissive: x < 0 ? 0xff2d8a : 0x2de0ff,
        emissiveIntensity: 0.7,
        metalness: 0.65,
        roughness: 0.25,
      });
      this.deckMats.push(mat);
      const deck = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.05, 24), mat);
      deck.position.set(x, y, -0.05);
      this.root.add(deck);
      // Platter ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.22, 0.015, 8, 24),
        new THREE.MeshStandardMaterial({
          color: 0xe8ecf8,
          metalness: 0.9,
          roughness: 0.2,
          emissive: x < 0 ? 0xff2d8a : 0x2de0ff,
          emissiveIntensity: 0.35,
        }),
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, y + 0.03, -0.05);
      this.root.add(ring);
    }

    const colors = [0xff2d8a, 0xffe066, 0x2de0ff, 0xb6ff3b, 0xff8a4a];
    for (let i = 0; i < 5; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.9,
      });
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.08, 0.07), mat);
      bar.position.set(-0.22 + i * 0.11, STAGE_TOP + 0.55, -0.48);
      this.eqLights.push(bar);
      this.root.add(bar);
    }
  }

  private addMonitors(): void {
    const mat = new THREE.MeshStandardMaterial({
      color: 0x16121e,
      roughness: 0.45,
      metalness: 0.4,
    });
    for (const x of [-1.85, 1.85] as const) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.58, 0.42), mat);
      body.position.set(x, STAGE_TOP + 0.38, -0.45);
      this.root.add(body);
      const cone = new THREE.Mesh(
        new THREE.CircleGeometry(0.16, 20),
        new THREE.MeshStandardMaterial({
          color: 0x2a2840,
          emissive: 0x4fd0ff,
          emissiveIntensity: 0.45,
          metalness: 0.5,
          roughness: 0.4,
        }),
      );
      cone.position.set(x, STAGE_TOP + 0.42, -0.22);
      this.root.add(cone);
    }

    // Low side subs — frame the stage, not the DJ face
    for (const x of [-3.5, 3.5] as const) {
      const sub = new THREE.Mesh(
        new THREE.BoxGeometry(0.85, 0.95, 0.7),
        new THREE.MeshStandardMaterial({
          color: 0x14101c,
          roughness: 0.55,
          metalness: 0.3,
          emissive: 0x1a1030,
          emissiveIntensity: 0.25,
        }),
      );
      sub.position.set(x, STAGE_TOP + 0.48, 0.15);
      this.root.add(sub);
      const grill = new THREE.Mesh(
        new THREE.CircleGeometry(0.28, 20),
        new THREE.MeshStandardMaterial({
          color: 0x222033,
          emissive: 0xff4fa3,
          emissiveIntensity: 0.3,
        }),
      );
      grill.position.set(x, STAGE_TOP + 0.55, 0.52);
      this.root.add(grill);
    }
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
    sprite.scale.set(1.95, 2.5, 1);
    group.add(sprite);

    const tagCanvas = document.createElement("canvas");
    tagCanvas.width = 240;
    tagCanvas.height = 64;
    const tctx = tagCanvas.getContext("2d");
    if (tctx) {
      tctx.fillStyle = "rgba(10,6,18,0.85)";
      tctx.beginPath();
      tctx.roundRect(8, 12, 224, 40, 12);
      tctx.fill();
      tctx.strokeStyle = "#FF4FA3";
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
          depthTest: true,
        }),
      );
      tag.scale.set(1.3, 0.35, 1);
      tag.position.set(0, 1.28, 0.02);
      group.add(tag);
    }

    group.position.set(0, this.djBaseY, 0.7);
    this.root.add(group);
    return group;
  }
}
