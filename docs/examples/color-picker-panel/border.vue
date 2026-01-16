<template>
  <div ref="containerRef">
    <div class="text-center">No border:</div>
    <ty-divider />
    <div class="flex flex-wrap justify-center gap-4">
      <div class="p-5">
        <ty-color-picker-panel v-model="value" :border="false" />
      </div>
      <ty-divider
        class="h-auto"
        :direction="isNarrow ? 'horizontal' : 'vertical'"
      />
      <ty-card>
        <ty-color-picker-panel v-model="value" :border="false" />
      </ty-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const value = ref('#ff6900')
const containerRef = ref<HTMLElement>()

const { width } = useElementSize(containerRef)

const isNarrow = computed(() => width.value < 815)
</script>
