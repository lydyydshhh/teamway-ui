<template>
  <ty-dropdown>
    <span class="ty-dropdown-link">
      Dropdown List
      <ty-icon class="ty-icon--right">
        <arrow-down />
      </ty-icon>
    </span>
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

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.example-showcase .ty-dropdown-link {
  cursor: pointer;
  color: var(--ty-color-primary);
  display: flex;
  align-items: center;
}
</style>
