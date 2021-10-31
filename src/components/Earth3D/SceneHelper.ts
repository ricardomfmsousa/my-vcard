import {
  Color3,
  HighlightLayer,
  Mesh,
  MeshBuilder,
  Scene,
  SolidParticleSystem,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";

import earthTexture from "../../images/textures/earth.jpg";

export const createStarField = (scene: Scene, starsCount: number): Mesh => {
  const starMaterial = new StandardMaterial("starMaterial", scene);
  starMaterial.alpha = 0.5;
  starMaterial.diffuseColor = new Color3(0.5, 0.5, 1.0);
  const starsSPS = new SolidParticleSystem("stars", scene, {
    updatable: false,
  });
  // Position each particle/star randomly
  const setParticles = (particle: Mesh) => {
    particle.position = new Vector3(
      -50 + Math.random() * 100,
      -50 + Math.random() * 100,
      -50 + Math.random() * 100
    );
  };
  const star = MeshBuilder.CreateSphere("star", { diameter: 0.1 }, scene);
  star.position = new Vector3(20, 0, 10);
  star.material = starMaterial;
  starsSPS.addShape(star, starsCount, { positionFunction: setParticles });
  const stars = starsSPS.buildMesh();
  const hl = new HighlightLayer("shl", scene);
  hl.addMesh(stars, new Color3(1, 1, 1));
  return stars;
};

export const createEarth = (scene: Scene): Mesh => {
  const earth = MeshBuilder.CreateSphere("earth", {}, scene);
  const earthMaterial = new StandardMaterial("ground", scene);
  earthMaterial.diffuseTexture = new Texture(earthTexture, scene);
  // Enable transparency
  earthMaterial.diffuseTexture.hasAlpha = true;
  // Don't clip back faces
  earthMaterial.backFaceCulling = false;
  // Invert texture axis
  earthMaterial.diffuseTexture["wAng"] = Math.PI;
  earth.material = earthMaterial;
  // Add a glowing effect
  const hl = new HighlightLayer("ehl", scene);
  hl.addMesh(earth, new Color3(0.25, 0.74, 0.78));
  return earth;
};

export const createEarthAxis = (scene: Scene): Vector3 => {
  const earthAxis = new Vector3(
    Math.sin((23 * Math.PI) / 180),
    Math.cos((23 * Math.PI) / 180),
    0
  );
  const axisLine = MeshBuilder.CreateLines(
    "axis",
    { points: [earthAxis.scale(-5), earthAxis.scale(5)] },
    scene
  );
  return earthAxis;
};
