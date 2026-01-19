<template>
  <ty-card
    class="content"
    @click="handleClick"
    @contextmenu="handleContextmenu"
  >
    Right click
  </ty-card>
  <ty-dropdown
    ref="dropdownRef"
    :virtual-ref="triggerRef"
    :show-arrow="false"
    :popper-options="{
      modifiers: [{ name: 'offset', options: { offset: [0, 0] } }],
    }"
    virtual-triggering
    trigger="contextmenu"
    placement="bottom-start"
  >
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item :icon="Plus">Action 1</ty-dropdown-item>
        <ty-dropdown-item :icon="CirclePlusFilled"> Action 2 </ty-dropdown-item>
        <ty-dropdown-item :icon="CirclePlus">Action 3</ty-dropdown-item>
        <ty-dropdown-item :icon="Check">Action 4</ty-dropdown-item>
        <ty-dropdown-item :icon="CircleCheck">Action 5</ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'

import type { DropdownInstance } from 'teamway-ui'

const dropdownRef = ref<DropdownInstance>()
const position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
} as DOMRect)

const triggerRef = ref({
  getBoundingClientRect: () => position.value,
})

const handleClick = () => {
  dropdownRef.value?.handleClose()
}

const handleContextmenu = (event: MouseEvent) => {
  const { clientX, clientY } = event
  position.value = DOMRect.fromRect({
    x: clientX,
    y: clientY,
  })
  event.preventDefault()
  dropdownRef.value?.handleOpen()
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>
