<template>
  <ty-tooltip
    v-model:visible="visible"
    content="Bottom center"
    placement="bottom"
    effect="light"
    trigger="click"
    virtual-triggering
    :virtual-ref="triggerRef"
  />
  <ty-button @click="visible = !visible">test</ty-button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)
const position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
} as DOMRect)

const triggerRef = ref({
  getBoundingClientRect: () => position.value,
})

const mousemoveHandler = ({ clientX, clientY }: MouseEvent) => {
  position.value = DOMRect.fromRect({
    x: clientX,
    y: clientY,
  })
}

onMounted(() => {
  document.addEventListener('mousemove', mousemoveHandler)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', mousemoveHandler)
})
</script>
