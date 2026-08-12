import * as THREE from "three";

/**
 * Polished hanging disco ball — mirror tiles + soft light shafts.
 */
export class DiscoBall {
  readonly root = new THREE.Group();

  private readonly spin: THREE.Group;
  private readonly tileMats: THREE.MeshStandardMaterial[] = [];
  private readonly rayMats: THREE.MeshBasicMaterial[] = [];
  private readonly spot: THREE.PointLight;

  constructor() {
    this.root.name = "DiscoBall";
    // Disco hangs above the LED wall (board top ~6.2)
    this.root.position.set(0, 8.35, 0.15);

    this.addMotorAndCord();
    this.spin = new THREE.Group();
    this.spin.position.y = -1.35;
    this.root.add(this.spin);

    const envMap = makeClubEnvMap();
    this.addMirrorSphere(envMap);
    this.addLightShafts();

    this.spot = new THREE.PointLight(0xfff5e8, 3.2, 12, 2);
    this.spin.add(this.spot);
  }

  update(time: number): void {
    const beat = time * ((128 / 60) * Math.PI);
    const kick = Math.abs(Math.sin(beat));
    const hard = kick > 0.82 ? 1 : kick;

    this.spin.rotation.y = time * 1.15;
    this.spin.rotation.z = Math.sin(time * 0.55) * 0.08;
    this.spot.intensity = 3.5 + hard * 4.5;
    this.spot.color.setHSL((time * 0.2) % 1, 0.55, 0.75 + hard * 0.15);
    if (this.rayMats[0]) {
      const o = 0.22 + hard * 0.35 + (Math.sin(time * 4) * 0.5 + 0.5) * 0.15;
      for (let i = 0; i < this.rayMats.length; i++) {
        this.rayMats[i]!.opacity = o;
      }
    }
  }

  private addMotorAndCord(): void {
    const chrome = new THREE.MeshStandardMaterial({
      color: 0xd8dde8,
      metalness: 1,
      roughness: 0.18,
    });
    const mount = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.14, 0.1, 16),
      chrome,
    );
    mount.position.y = 0.02;
    this.root.add(mount);

    const cord = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 1.05, 8),
      new THREE.MeshStandardMaterial({
        color: 0xb0b8c8,
        metalness: 0.9,
        roughness: 0.25,
      }),
    );
    cord.position.y = -0.55;
    this.root.add(cord);

    // Cap above the ball
    const cap = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5),
      chrome,
    );
    cap.position.y = -1.12;
    this.root.add(cap);
  }

  private addMirrorSphere(envMap: THREE.Texture): void {
    // Dark core so tile gaps read as grid
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.52, 32, 24),
      new THREE.MeshStandardMaterial({
        color: 0x1a1c22,
        metalness: 0.8,
        roughness: 0.4,
      }),
    );
    this.spin.add(core);

    const silver = new THREE.MeshStandardMaterial({
      color: 0xf4f7ff,
      metalness: 1,
      roughness: 0.08,
      envMap,
      envMapIntensity: 1.6,
      emissive: 0x8899bb,
      emissiveIntensity: 0.2,
    });
    const gold = new THREE.MeshStandardMaterial({
      color: 0xffe8c0,
      metalness: 1,
      roughness: 0.12,
      envMap,
      envMapIntensity: 1.4,
      emissive: 0xaa8866,
      emissiveIntensity: 0.18,
    });
    this.tileMats.push(silver, gold);

    const latBands = 12;
    const lonBands = 24;
    const radius = 0.545;
    const tileW = ((Math.PI * 2) / lonBands) * radius * 0.92;
    const tileH = (Math.PI / latBands) * radius * 0.92;
    const geo = new THREE.PlaneGeometry(tileW, tileH);
    const zAxis = new THREE.Vector3(0, 0, 1);

    const silverDummy: THREE.Object3D[] = [];
    const goldDummy: THREE.Object3D[] = [];

    for (let lat = 0; lat < latBands; lat++) {
      const v0 = lat / latBands;
      const v1 = (lat + 1) / latBands;
      const phi = ((v0 + v1) * 0.5) * Math.PI;
      for (let lon = 0; lon < lonBands; lon++) {
        const u = (lon + 0.5) / lonBands;
        const theta = u * Math.PI * 2;
        const pos = new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta),
        );
        if (Math.abs(pos.y) > radius * 0.92) continue;

        const dummy = new THREE.Object3D();
        dummy.position.copy(pos);
        dummy.quaternion.setFromUnitVectors(zAxis, pos.clone().normalize());
        dummy.updateMatrix();
        if ((lat + lon) % 5 === 0) goldDummy.push(dummy);
        else silverDummy.push(dummy);
      }
    }

    const silverInst = new THREE.InstancedMesh(geo, silver, silverDummy.length);
    silverDummy.forEach((d, i) => silverInst.setMatrixAt(i, d.matrix));
    silverInst.instanceMatrix.needsUpdate = true;
    this.spin.add(silverInst);

    const goldInst = new THREE.InstancedMesh(geo, gold, goldDummy.length);
    goldDummy.forEach((d, i) => goldInst.setMatrixAt(i, d.matrix));
    goldInst.instanceMatrix.needsUpdate = true;
    this.spin.add(goldInst);

    // Soft outer glow shell
    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(0.62, 24, 16),
      new THREE.MeshBasicMaterial({
        color: 0xc8d8ff,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.spin.add(shell);
  }

  private addLightShafts(): void {
    // Short upward-ish shafts — don't hang down into crowd face height
    const shaftTex = makeShaftTexture();
    const colors = [0xffffff, 0xffc0e0, 0xa8e8ff, 0xffe0a0];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: shaftTex,
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: true,
        side: THREE.DoubleSide,
      });
      this.rayMats.push(mat);
      const shaft = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 2.4), mat);
      shaft.position.y = -1.0;
      const pivot = new THREE.Group();
      pivot.rotation.set(0.25 + (i % 2) * 0.1, (i / 4) * Math.PI * 2, 0);
      pivot.add(shaft);
      this.spin.add(pivot);
    }
  }
}

function makeClubEnvMap(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, 0, 128);
  g.addColorStop(0, "#1a1028");
  g.addColorStop(0.35, "#ff4fa3");
  g.addColorStop(0.55, "#2de0ff");
  g.addColorStop(0.75, "#ffb060");
  g.addColorStop(1, "#120810");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 128);
  for (const [x, y, r, col] of [
    [60, 40, 28, "rgba(255,255,255,0.85)"],
    [150, 50, 22, "rgba(255,220,180,0.7)"],
    [210, 70, 30, "rgba(180,240,255,0.75)"],
  ] as const) {
    const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, col);
    rg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, 256, 128);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  return tex;
}

function makeShaftTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(32, 0, 32, 256);
  g.addColorStop(0, "rgba(255,255,255,0.9)");
  g.addColorStop(0.15, "rgba(255,255,255,0.45)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 256);
  const across = ctx.createLinearGradient(0, 0, 64, 0);
  across.addColorStop(0, "rgba(0,0,0,0)");
  across.addColorStop(0.5, "rgba(255,255,255,1)");
  across.addColorStop(1, "rgba(0,0,0,0)");
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = across;
  ctx.fillRect(0, 0, 64, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
