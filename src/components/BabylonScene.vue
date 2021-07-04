<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>

<script>
import { createScene } from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",

  data() {
    return {
      scene: null,
      engine: null,
      interval: null,
    };
  },

  methods: {
    setupFpsEmitter() {
      const interval = setInterval(() => {
        const fps = this.engine.getFps().toFixed();
        this.$emit("fps", fps);
      }, 1000);
      this.interval = interval;
    },
  },
  mounted() {
    const bjsCanvas = this.$refs.bjsCanvas;
    if (bjsCanvas) {
      const { engine, scene } = createScene(bjsCanvas);
      this.engine = engine;
      this.scene = scene;

      this.setupFpsEmitter();
    }
  },
  unmounted() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
};
</script>
