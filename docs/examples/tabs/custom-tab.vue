<template>
  <ty-tabs type="border-card" class="demo-tabs">
    <ty-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <ty-icon><calendar /></ty-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </ty-tab-pane>
    <ty-tab-pane label="Config">Config</ty-tab-pane>
    <ty-tab-pane label="Role">Role</ty-tab-pane>
    <ty-tab-pane label="Task">Task</ty-tab-pane>
  </ty-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
