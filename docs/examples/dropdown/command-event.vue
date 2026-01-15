<template>
  <ty-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      Dropdown List<ty-icon class="el-icon--right"><arrow-down /></ty-icon>
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
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
}
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--ty-color-primary);
  display: flex;
  align-items: center;
}
</style>
