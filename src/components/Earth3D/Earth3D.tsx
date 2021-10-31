import { ArcRotateCamera, Color4, HemisphericLight, Mesh, Scene, Space, Vector3 } from "@babylonjs/core";
import SceneComponent from "babylonjs-hook";
import React from "react";

import * as styles from "./Earth3D.module.scss";
import { createEarth, createEarthAxis, createStarField } from "./SceneHelper";

let earth: Mesh;
let earthAxis: Vector3;
const cameraRadius = { start: 2, end: 2 };
let camera: ArcRotateCamera;

const onSceneReady = (scene: Scene) => {
  // Scene
  scene.clearColor = new Color4(0, 0, 0);
  // Camera
  camera = new ArcRotateCamera(
    "camera1",
    -Math.PI / 2,
    Math.PI / 4,
    cameraRadius.start,
    new Vector3(0, 0, 0),
    scene
  );

  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);
  // Light
  const light = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
  // Meshes
  earth = createEarth(scene);
  earthAxis = createEarthAxis(scene);
  createStarField(scene, 1600);
};

/**
 * Will run on every frame render.
 */
const onRender = (scene: Scene) => {
  if (earth !== undefined && earthAxis !== undefined) {
    const angle = 0.001;
    earth.rotate(earthAxis, angle, Space.WORLD);
  }
  // Simulate warp speed
  // if (camera) {
  //   if (camera.radius > cameraRadius.end) {
  //     camera.radius -= 0.7;
  //   }
  // }
};

type Earth3DProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Earth3D(props: Earth3DProps) {
  return (
    <>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id={styles.canvas}
      />
      {props.children}
    </>
  );
}
