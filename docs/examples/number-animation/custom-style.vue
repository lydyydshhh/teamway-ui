<template>
  <div class="flex items-center gap-4">
    <ty-button @click="handleClick">播放</ty-button>
    <ty-number-animation
      ref="numberAnimationRef"
      class="number-animation-font"
      :from="0"
      :to="699700.699"
      :precision="2"
      :active="false"
      show-separator
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TyNumberAnimation } from 'teamway-ui'

const numberAnimationRef = ref<InstanceType<typeof TyNumberAnimation> | null>(
  null
)

const handleClick = () => {
  numberAnimationRef.value?.play()
}
</script>

<style lang="scss" scoped>
.number-animation-font {
  font-size: 36px;
  color: var(--ty-color-success);
}
</style>
