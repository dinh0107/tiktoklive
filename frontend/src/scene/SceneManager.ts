import * as THREE from "three";
import { CameraController } from "./CameraController";
import { setupLighting, type ClubLights } from "./Lighting";
import { BarScene } from "./BarScene";
import { CharacterManager } from "../characters/CharacterManager";
import { GiftParticles } from "../gifts/GiftParticles";

export class SceneManager {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly cameraController: CameraController;
  readonly characters: CharacterManager;
  readonly bar: BarScene;
  readonly particles: GiftParticles;
  readonly transparent: boolean;

  private readonly lights: ClubLights;
  private readonly clock = new THREE.Clock();
  private raf = 0;
  private running = false;
  private frame = 0;

  constructor(
    canvas: HTMLCanvasElement,
    opts?: { transparent?: boolean },
  ) {
    this.transparent = opts?.transparent === true;
    this.scene = new THREE.Scene();

    if (this.transparent) {
      this.scene.background = null;
      this.scene.fog = null;
    } else {
      this.scene.background = new THREE.Color(0x121a3a);
      this.scene.fog = new THREE.Fog(0x121a3a, 22, 48);
    }

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });
    // OBS / live: keep pixel count down
    const dprCap = this.transparent ? 1 : 1.25;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.setClearColor(0x000000, this.transparent ? 0 : 1);
    this.renderer.shadowMap.enabled = false;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    // No ACES — cheaper post path
    this.renderer.toneMapping = THREE.NoToneMapping;

    this.cameraController = new CameraController(
      window.innerWidth / window.innerHeight,
    );

    this.lights = setupLighting(this.scene);

    this.bar = new BarScene();
    this.scene.add(this.bar.root);

    this.characters = new CharacterManager(this.scene);

    this.particles = new GiftParticles();
    this.scene.add(this.particles.root);

    window.addEventListener("resize", this.onResize);
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    document.addEventListener("visibilitychange", this.onVisibility);
    const tick = (): void => {
      this.raf = requestAnimationFrame(tick);
      if (document.hidden) return;
      const dt = Math.min(this.clock.getDelta(), 0.05);
      const t = this.clock.elapsedTime;
      this.frame++;

      // Characters every frame (dance idle)
      this.characters.update(t);
      this.cameraController.update();
      this.particles.update(dt);
      this.bar.update(t, this.frame);
      this.lights.update(t);

      this.renderer.render(this.scene, this.cameraController.camera);
    };
    tick();
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
    document.removeEventListener("visibilitychange", this.onVisibility);
  }

  dispose(): void {
    this.stop();
    window.removeEventListener("resize", this.onResize);
    this.characters.getAllCharacters().forEach((c) => c.dispose());
    this.particles.dispose();
    this.renderer.dispose();
  }

  private onResize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.cameraController.resize(w / h);
  };

  private onVisibility = (): void => {
    if (!document.hidden) this.clock.getDelta();
  };
}
