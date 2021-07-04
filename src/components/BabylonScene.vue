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

  methods: {
    emitPositionVector() {
      const bjsPositionVector = myScene.getPosition("box-yellow", this.scene);
      this.$emit("bjsPositionVector", bjsPositionVector);
    },
    emitRotationVector() {
      const bjsRotationVector = myScene.getRotation("box-green", this.scene);
      this.$emit("bjsRotationVector", bjsRotationVector);
    },
  },
  mounted() {
    const bjsCanvas = this.$refs.bjsCanvas;
    if (bjsCanvas) {
      myScene.createScene(bjsCanvas);

      this.emitPositionVector();
      this.emitRotationVector();
    }
  },
};
</script>
