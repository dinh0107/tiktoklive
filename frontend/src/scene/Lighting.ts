import * as THREE from "three";

export interface ClubLights {
  update: (time: number) => void;
}

/** Outdoor night festival — beat-synced wash. */
export function setupLighting(scene: THREE.Scene): ClubLights {
  scene.add(new THREE.AmbientLight(0x2a2840, 0.55));
  scene.add(new THREE.HemisphereLight(0x8aa0d0, 0x3a4828, 0.5));

  const moon = new THREE.DirectionalLight(0xc8d8ff, 0.45);
  moon.position.set(-4, 12, 2);
  scene.add(moon);

  const groundFill = new THREE.DirectionalLight(0xffe8c8, 0.4);
  groundFill.position.set(2, 8, 6);
  scene.add(groundFill);

  const stageKey = new THREE.SpotLight(0xffe4c8, 9, 28, 0.55, 0.35, 1.5);
  stageKey.position.set(0, 9, 2);
  stageKey.target.position.set(0, 1.5, -5.0);
  scene.add(stageKey);
  scene.add(stageKey.target);

  const fillL = new THREE.PointLight(0xff4fa3, 2.8, 18, 2);
  fillL.position.set(-5.5, 4.5, -1);
  scene.add(fillL);

  const fillR = new THREE.PointLight(0x4fd0ff, 2.8, 18, 2);
  fillR.position.set(5.5, 4.5, -1);
  scene.add(fillR);

  // Crowd wash — pulses with the beat so the floor feels alive
  const crowdWash = new THREE.PointLight(0xffb060, 2.4, 14, 2);
  crowdWash.position.set(0, 5.5, 1.2);
  scene.add(crowdWash);

  return {
    update(time: number) {
      const beat = time * ((128 / 60) * Math.PI);
      const kick = Math.abs(Math.sin(beat));
      const hard = kick > 0.85 ? 1 : kick;

      stageKey.intensity = 7.5 + hard * 3.5;
      fillL.intensity = 1.2 + (Math.sin(beat + 0.2) > 0 ? 2.4 : 0.4);
      fillR.intensity = 1.2 + (Math.sin(beat + 1.1) > 0 ? 2.4 : 0.4);
      crowdWash.intensity = 1.4 + hard * 2.2;
      crowdWash.color.setHSL(0.08 + kick * 0.08, 0.85, 0.55 + hard * 0.15);
    },
  };
}
