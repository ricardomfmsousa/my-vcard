import { Color3, Mesh, MeshBuilder, Scene, SolidParticleSystem, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";

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
  const star = MeshBuilder.CreateSphere("star", { diameter: 0.05 }, scene);
  star.position = new Vector3(20, 0, 10);
  star.material = starMaterial;
  starsSPS.addShape(star, starsCount, { positionFunction: setParticles });
  return starsSPS.buildMesh();
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
