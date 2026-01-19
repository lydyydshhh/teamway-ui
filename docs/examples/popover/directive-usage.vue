<template>
  <ty-button v-popover="popoverRef" v-click-outside="onClickOutside">
    Click me
  </ty-button>

  <ty-popover
    ref="popoverRef"
    trigger="click"
    title="With title"
    virtual-triggering
    persistent
  >
    <span> Some content </span>
  </ty-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'teamway-ui'

import type { PopoverInstance } from 'teamway-ui'

const popoverRef = ref<PopoverInstance>()
const onClickOutside = () => {
  popoverRef.value?.hide()
}
</script>
