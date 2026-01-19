<template>
  <ty-button ref="buttonRef" v-click-outside="onClickOutside">
    Click me
  </ty-button>

  <ty-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
  >
    <span> Some content </span>
  </ty-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'teamway-ui'

import type { PopoverInstance } from 'teamway-ui'

const buttonRef = ref()
const popoverRef = ref<PopoverInstance>()
const onClickOutside = () => {
  popoverRef.value?.hide()
}
</script>
