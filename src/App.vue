<template>
  <div>
    <button @click="moveCube">Move Cube</button>
    <BabylonScene :position="cubePosition" />
  </div>
</template>

<script>
import BabylonScene from "./components/BabylonScene.vue";

export default {
  name: "App",
  components: {
    BabylonScene,
  },
  data() {
    return {
      cubePosition: {},

      offset: 0,
      x: 0,
      y: 0,
      z: 0,
    };
  },
  methods: {
    moveCube() {
      this.getNextPosition();
      this.moveCubeSharedScene();
    },
    moveCubeSharedScene() {
      this.cubePosition = { x: -2, y: this.y, z: this.z };
    },
    getNextPosition() {
      this.offset += 0.5;
      this.x = 0;
      this.y = 0 + this.offset;
      this.z = 0;
    },
  },
};
</script>

<style>
body {
  padding: 10px;
}

label {
  display: block;
}
</style>
