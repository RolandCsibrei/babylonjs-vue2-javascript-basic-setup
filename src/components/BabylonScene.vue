<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>

<script>
import myScene from "../scenes/MyFirstScene";

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

  watch: {
    position(val) {
      if (val) {
        myScene.setPosition("box-green", val.x, val.y, val.z);
      }
    },
  },
  mounted() {
    const bjsCanvas = this.$refs.bjsCanvas;
    if (bjsCanvas) {
      myScene.createScene(bjsCanvas);
    }
  },
};
</script>
