<template>
  <div style="font-size: 14px">
    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>
  </div>
  <div style="margin: 15px">
    <ty-button @click="showClick">show</ty-button>
  </div>
  <ty-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
    <span class="ty-dropdown-link"> Dropdown List1 </span>
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item>Action 1</ty-dropdown-item>
        <ty-dropdown-item>Action 2</ty-dropdown-item>
        <ty-dropdown-item>Action 3</ty-dropdown-item>
        <ty-dropdown-item disabled>Action 4</ty-dropdown-item>
        <ty-dropdown-item divided>Action 5</ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>

  <ty-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <span class="ty-dropdown-link"> Dropdown List2 </span>
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item>Action 1</ty-dropdown-item>
        <ty-dropdown-item>Action 2</ty-dropdown-item>
        <ty-dropdown-item>Action 3</ty-dropdown-item>
        <ty-dropdown-item disabled>Action 4</ty-dropdown-item>
        <ty-dropdown-item divided>Action 5</ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { DropdownInstance } from 'element-plus'

const dropdown1 = ref<DropdownInstance>()
function handleVisible2(visible: any) {
  if (!dropdown1.value) return
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
}
</script>

<style scoped>
.example-showcase .ty-dropdown-link {
  cursor: pointer;
  color: var(--ty-color-primary);
  display: flex;
  align-items: center;
}
</style>
