<template>
  <div>
    <button @click="hide">Hide the cube</button>
    <br />
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>

<script>
import myScene from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",
  methods: {
    async hide() {
      await myScene.animateMeshVisibility("box", 1, 0, 0.3);
      alert("Done");
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
