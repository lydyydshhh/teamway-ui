<template>
  <ty-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <ty-radio-button :value="false">expand</ty-radio-button>
    <ty-radio-button :value="true">collapse</ty-radio-button>
  </ty-radio-group>
  <ty-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <ty-sub-menu index="1">
      <template #title>
        <ty-icon><location /></ty-icon>
        <span>Navigator One</span>
      </template>
      <ty-menu-item-group>
        <template #title><span>Group One</span></template>
        <ty-menu-item index="1-1">item one</ty-menu-item>
        <ty-menu-item index="1-2">item two</ty-menu-item>
      </ty-menu-item-group>
      <ty-menu-item-group title="Group Two">
        <ty-menu-item index="1-3">item three</ty-menu-item>
      </ty-menu-item-group>
      <ty-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <ty-menu-item index="1-4-1">item one</ty-menu-item>
      </ty-sub-menu>
    </ty-sub-menu>
    <ty-menu-item index="2">
      <ty-icon><icon-menu /></ty-icon>
      <template #title>Navigator Two</template>
    </ty-menu-item>
    <ty-menu-item index="3" disabled>
      <ty-icon><document /></ty-icon>
      <template #title>Navigator Three</template>
    </ty-menu-item>
    <ty-menu-item index="4">
      <ty-icon><setting /></ty-icon>
      <template #title>Navigator Four</template>
    </ty-menu-item>
  </ty-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
