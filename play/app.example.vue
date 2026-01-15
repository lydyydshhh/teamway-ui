<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <ty-config-provider namespace="ep"> -->
  <div class="play-container">
    <ty-icon color="#409EFC">
      <ty-icon-check />
    </ty-icon>
    <ty-icon>
      <ty-icon-menu />
    </ty-icon>
    <ty-button>test</ty-button>
    <div v-loading="true" />
  </div>
  <!-- </ty-config-provider> -->
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
