/* eslint-disable no-unused-vars */
import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  Animation,
} from "@babylonjs/core";
const myScene = {
  engine: null,
  scene: null,

  createScene: function(canvas) {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    this.engine = engine;
    this.scene = scene;

    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    new HemisphericLight("light", Vector3.Up(), scene);

    const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
    const material = new StandardMaterial("box-material", scene);
    material.diffuseColor = Color3.Blue();
    box.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });
  },

  async animateMeshVisibility(name, from, to, speed) {
    return new Promise((resolve, reject) => {
      const mesh = this.scene.getMeshByName(name);
      if (!mesh) {
        reject("No mesh");
      }

      this.scene.meshes.forEach((m) => {
        const visibilityAnimation = new Animation(
          "anim",
          "visibility",
          60,
          Animation.ANIMATIONTYPE_FLOAT
        );
        const keys = [];

        const frames = 60;
        keys.push({
          frame: 0,
          value: 1,
        });

        keys.push({
          frame: frames,
          value: 0,
        });

        visibilityAnimation.setKeys(keys);

        m.animations = [visibilityAnimation];
        this.scene.beginAnimation(m, 0, frames, false, speed, () => {
          resolve();
        });
      });
    });
  },
};

export default myScene;
