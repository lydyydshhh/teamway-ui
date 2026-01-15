<template>
  <ty-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <ty-radio-button value="top">top</ty-radio-button>
    <ty-radio-button value="right">right</ty-radio-button>
    <ty-radio-button value="bottom">bottom</ty-radio-button>
    <ty-radio-button value="left">left</ty-radio-button>
  </ty-radio-group>

  <ty-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <ty-tab-pane label="User">User</ty-tab-pane>
    <ty-tab-pane label="Config">Config</ty-tab-pane>
    <ty-tab-pane label="Role">Role</ty-tab-pane>
    <ty-tab-pane label="Task">Task</ty-tab-pane>
  </ty-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TabsInstance } from 'element-plus'

const tabPosition = ref<TabsInstance['tabPosition']>('left')
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
