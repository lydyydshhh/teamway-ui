<template>
  <ty-dropdown @command="handleCommand">
    <span class="ty-dropdown-link">
      Dropdown List<ty-icon class="ty-icon--right"><arrow-down /></ty-icon>
    </span>
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item command="a">Action 1</ty-dropdown-item>
        <ty-dropdown-item command="b">Action 2</ty-dropdown-item>
        <ty-dropdown-item command="c">Action 3</ty-dropdown-item>
        <ty-dropdown-item command="d" disabled>Action 4</ty-dropdown-item>
        <ty-dropdown-item command="e" divided>Action 5</ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>
</template>

<script lang="ts" setup>
import { TyMessage } from 'teamway-ui'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {
  TyMessage(`click on item ${command}`)
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
