<template>
  <ty-config-provider namespace="ty">
    <div class="play-container">
      <ty-icon color="red">
        <Edit />
      </ty-icon>
      <ty-button>test</ty-button>
    </div>
  </ty-config-provider>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
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
