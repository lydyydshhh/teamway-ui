<template>
  <div class="flex flex-wrap items-center">
    <ty-dropdown>
      <ty-button type="primary">
        Dropdown List<ty-icon class="el-icon--right"><arrow-down /></ty-icon>
      </ty-button>
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>Action 1</ty-dropdown-item>
          <ty-dropdown-item>Action 2</ty-dropdown-item>
          <ty-dropdown-item>Action 3</ty-dropdown-item>
          <ty-dropdown-item>Action 4</ty-dropdown-item>
          <ty-dropdown-item>Action 5</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
    <ty-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>Action 1</ty-dropdown-item>
          <ty-dropdown-item>Action 2</ty-dropdown-item>
          <ty-dropdown-item>Action 3</ty-dropdown-item>
          <ty-dropdown-item divided>Action 4</ty-dropdown-item>
          <ty-dropdown-item>Action 5</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>

<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--ty-color-primary);
  display: flex;
  align-items: center;
}
</style>
