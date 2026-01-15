<template>
  <div>
    <ty-button @click="show = !show">Click Me</ty-button>

    <div style="margin-top: 20px; height: 210px">
      <ty-collapse-transition>
        <div v-show="show">
          <div class="transition-box">ty-collapse-transition</div>
          <div class="transition-box mt-[10px]">ty-collapse-transition</div>
        </div>
      </ty-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.transition-box {
  width: 200px;
  height: 100px;
  border-radius: var(--ty-border-radius-base);
  background-color: var(--ty-color-primary);
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
}
</style>
