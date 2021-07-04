<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>

<script>
import { Vector3 } from "@babylonjs/core";
import { createScene } from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",
  props: {
    position: {
      type: Object,
      default() {
        return { x: 0, y: 0, z: 0 };
      },
    },
  },

  data() {
    return {
      scene: null,
      engine: null,
    };
  },

  watch: {
    position(val) {
      if (val) {
        const box = this.scene.getMeshByName("box-red");
        const position = new Vector3(val.x, val.y, val.z);
        if (box) {
          box.position = position;
        }
      }
    },
  },
  mounted() {
    const bjsCanvas = this.$refs.bjsCanvas;
    if (bjsCanvas) {
      const { engine, scene } = createScene(bjsCanvas);
      this.engine = engine;
      this.scene = scene;
    }
  },
};
</script>
