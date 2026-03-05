<template>
  <div class="flex items-center gap-4">
    <ty-button @click="handleClick">播放</ty-button>
    <ty-number-animation
      ref="numberAnimationRef"
      show-separator
      :from="0"
      :to="100000000"
      :active="false"
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
