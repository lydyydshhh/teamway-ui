<template>
  <ty-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <ty-tab-pane label="User" name="first">User</ty-tab-pane>
    <ty-tab-pane label="Config" name="second">Config</ty-tab-pane>
    <ty-tab-pane label="Role" name="third">Role</ty-tab-pane>
    <ty-tab-pane label="Task" name="fourth">Task</ty-tab-pane>
  </ty-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TabsPaneContext } from 'teamway-ui'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs > .ty-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
