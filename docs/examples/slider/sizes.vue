<template>
  <div class="slider-demo-block">
    <ty-slider v-model="value" show-input size="large" />
    <ty-slider v-model="value" show-input />
    <ty-slider v-model="value" show-input size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
}

.ty-slider {
  margin-top: 20px;
}

.ty-slider:first-child {
  margin-top: 0;
}
</style>
