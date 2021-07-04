<template>
  <div>
    <label v-if="bjsRotationVector"
      >Green Rotation Y: {{ bjsRotationVector.y }}</label
    >
    <label v-if="bjsPositionVector"
      >Yellow Position:{{ bjsPositionVector }}</label
    >
    <button @click="moveCube">Move Yellow Cube</button>
    <BabylonScene
      @bjsPositionVector="bjsPositionVectorReceived"
      @bjsRotationVector="bjsRotationVectorReceived"
      :position="cubePosition"
    />
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

      bjsPositionVector: null,
      bjsRotationVector: null,
    };
  },
  methods: {
    bjsPositionVectorReceived(bjsPositionVector) {
      this.bjsPositionVector = bjsPositionVector;
    },
    bjsRotationVectorReceived(bjsRotationVector) {
      this.bjsRotationVector = bjsRotationVector;
    },
    moveCube() {
      this.getNextPosition();

      this.moveCubeSharedVector();
    },

    moveCubeSharedScene() {
      this.cubePosition = { x: -2, y: this.y, z: this.z };
    },
    moveCubeSharedVector() {
      if (this.bjsPositionVector) {
        // this.bjsPositionVector = new Vector3(0, this.y, this.z);
        // the line above will not work, you must not crate a new object
        // but you have to modify the existing one's properties
        this.bjsPositionVector.y = this.y;
      }
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
