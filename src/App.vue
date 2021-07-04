<template>
  <div>
    <label>{{ fps }}</label>
    <BabylonScene @fps="fpsReceived" />
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
      fps: 0,
    };
  },
  methods: {
    fpsReceived(fps) {
      this.fps = fps;
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
