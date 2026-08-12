import * as THREE from "three";

export interface ClubLights {
  update: (time: number) => void;
}

/** Outdoor night festival — punchy beat-synced wash. */
export function setupLighting(scene: THREE.Scene): ClubLights {
  scene.add(new THREE.AmbientLight(0x3a3060, 0.42));
  scene.add(new THREE.HemisphereLight(0xa8b8e8, 0x2a3820, 0.55));

  const moon = new THREE.DirectionalLight(0xc8d8ff, 0.35);
  moon.position.set(-4, 12, 2);
  scene.add(moon);

  const groundFill = new THREE.DirectionalLight(0xffe8c8, 0.35);
  groundFill.position.set(2, 8, 6);
  scene.add(groundFill);

  // Main stage key — warm punch
  const stageKey = new THREE.SpotLight(0xfff0d8, 14, 32, 0.62, 0.28, 1.2);
  stageKey.position.set(0, 9.5, 2.2);
  stageKey.target.position.set(0, 1.5, -5.0);
  scene.add(stageKey);
  scene.add(stageKey.target);

  // Color chase spots aimed at crowd + stage
  const chaseA = new THREE.SpotLight(0xff2d8a, 10, 26, 0.48, 0.4, 1.4);
  chaseA.position.set(-6, 8.5, 1);
  chaseA.target.position.set(0, 1.2, -1);
  scene.add(chaseA);
  scene.add(chaseA.target);

  const chaseB = new THREE.SpotLight(0x2de0ff, 10, 26, 0.48, 0.4, 1.4);
  chaseB.position.set(6, 8.5, 1);
  chaseB.target.position.set(0, 1.2, -1);
  scene.add(chaseB);
  scene.add(chaseB.target);

  const chaseC = new THREE.SpotLight(0xffe066, 8, 24, 0.42, 0.45, 1.5);
  chaseC.position.set(0, 9, -1);
  chaseC.target.position.set(0, 0.8, 2);
  scene.add(chaseC);
  scene.add(chaseC.target);

  const fillL = new THREE.PointLight(0xff4fa3, 5, 20, 1.8);
  fillL.position.set(-5.5, 4.8, -0.5);
  scene.add(fillL);

  const fillR = new THREE.PointLight(0x4fd0ff, 5, 20, 1.8);
  fillR.position.set(5.5, 4.8, -0.5);
  scene.add(fillR);

  const crowdWash = new THREE.PointLight(0xffb060, 4.5, 16, 1.8);
  crowdWash.position.set(0, 5.8, 1.5);
  scene.add(crowdWash);

  // Moving rim strobes over the pit
  const rimL = new THREE.PointLight(0xb06bff, 3, 14, 2);
  rimL.position.set(-3.5, 3.2, 3);
  scene.add(rimL);

  const rimR = new THREE.PointLight(0xff8a4a, 3, 14, 2);
  rimR.position.set(3.5, 3.2, 3);
  scene.add(rimR);

  const backBar = new THREE.PointLight(0xff4fa3, 4, 16, 2);
  backBar.position.set(0, 6.5, -6.2);
  scene.add(backBar);

  const palette = [
    new THREE.Color(0xff2d8a),
    new THREE.Color(0x2de0ff),
    new THREE.Color(0xffe066),
    new THREE.Color(0xb06bff),
    new THREE.Color(0x7cffb0),
    new THREE.Color(0xff8a4a),
  ];

  return {
    update(time: number) {
      const beat = time * ((128 / 60) * Math.PI);
      const kick = Math.abs(Math.sin(beat));
      const hard = kick > 0.82 ? 1 : kick * kick;
      const half = Math.abs(Math.sin(beat * 0.5));
      const offbeat = Math.abs(Math.sin(beat + Math.PI * 0.5));

      // Stage pump
      stageKey.intensity = 10 + hard * 8;
      stageKey.color.setHSL(0.08 + half * 0.04, 0.45, 0.82 + hard * 0.1);

      // Alternating L/R color chase
      const leftOn = Math.sin(beat) > 0;
      fillL.intensity = leftOn ? 3.5 + hard * 5 : 0.6 + offbeat * 1.2;
      fillR.intensity = leftOn ? 0.6 + offbeat * 1.2 : 3.5 + hard * 5;
      fillL.color.copy(palette[Math.floor(time * 0.4) % palette.length]!);
      fillR.color.copy(palette[(Math.floor(time * 0.4) + 2) % palette.length]!);

      // Sweeping spotlights
      const sweep = Math.sin(time * 1.35) * 4.5;
      chaseA.target.position.set(sweep, 1.0, -1 + Math.sin(time * 0.9) * 2);
      chaseB.target.position.set(-sweep, 1.0, -1 + Math.cos(time * 0.9) * 2);
      chaseC.target.position.set(
        Math.sin(time * 1.1) * 3,
        0.6,
        1.5 + Math.cos(time * 0.8) * 2,
      );
      chaseA.intensity = 6 + hard * 10;
      chaseB.intensity = 6 + hard * 10;
      chaseC.intensity = 4 + offbeat * 8;
      chaseA.color.copy(palette[Math.floor(time * 0.55) % palette.length]!);
      chaseB.color.copy(palette[(Math.floor(time * 0.55) + 3) % palette.length]!);
      chaseC.color.copy(palette[(Math.floor(time * 0.7) + 1) % palette.length]!);

      // Crowd bloom + hue spin
      crowdWash.intensity = 2.2 + hard * 5.5;
      crowdWash.color.setHSL((time * 0.12) % 1, 0.9, 0.52 + hard * 0.2);
      crowdWash.position.x = Math.sin(time * 0.8) * 2.2;

      rimL.intensity = 1.5 + (leftOn ? hard * 6 : offbeat * 2);
      rimR.intensity = 1.5 + (!leftOn ? hard * 6 : offbeat * 2);
      rimL.color.copy(palette[Math.floor(time * 0.9) % palette.length]!);
      rimR.color.copy(palette[(Math.floor(time * 0.9) + 3) % palette.length]!);

      backBar.intensity = 2.5 + hard * 4.5;
      backBar.color.setHSL(0.92 + half * 0.08, 0.95, 0.55 + hard * 0.2);
    },
  };
}
