<template>
  <ty-row class="tac">
    <ty-col :span="12">
      <h5 class="mb-2">Default colors</h5>
      <ty-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <ty-sub-menu index="1">
          <template #title>
            <ty-icon><location /></ty-icon>
            <span>Navigator One</span>
          </template>
          <ty-menu-item-group title="Group One">
            <ty-menu-item index="1-1">item one</ty-menu-item>
            <ty-menu-item index="1-2">item two</ty-menu-item>
          </ty-menu-item-group>
          <ty-menu-item-group title="Group Two">
            <ty-menu-item index="1-3">item three</ty-menu-item>
          </ty-menu-item-group>
          <ty-sub-menu index="1-4">
            <template #title>item four</template>
            <ty-menu-item index="1-4-1">item one</ty-menu-item>
          </ty-sub-menu>
        </ty-sub-menu>
        <ty-menu-item index="2">
          <ty-icon><icon-menu /></ty-icon>
          <span>Navigator Two</span>
        </ty-menu-item>
        <ty-menu-item index="3" disabled>
          <ty-icon><document /></ty-icon>
          <span>Navigator Three</span>
        </ty-menu-item>
        <ty-menu-item index="4">
          <ty-icon><setting /></ty-icon>
          <span>Navigator Four</span>
        </ty-menu-item>
      </ty-menu>
    </ty-col>
    <ty-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <ty-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <ty-sub-menu index="1">
          <template #title>
            <ty-icon><location /></ty-icon>
            <span>Navigator One</span>
          </template>
          <ty-menu-item-group title="Group One">
            <ty-menu-item index="1-1">item one</ty-menu-item>
            <ty-menu-item index="1-2">item two</ty-menu-item>
          </ty-menu-item-group>
          <ty-menu-item-group title="Group Two">
            <ty-menu-item index="1-3">item three</ty-menu-item>
          </ty-menu-item-group>
          <ty-sub-menu index="1-4">
            <template #title>item four</template>
            <ty-menu-item index="1-4-1">item one</ty-menu-item>
          </ty-sub-menu>
        </ty-sub-menu>
        <ty-menu-item index="2">
          <ty-icon><icon-menu /></ty-icon>
          <span>Navigator Two</span>
        </ty-menu-item>
        <ty-menu-item index="3" disabled>
          <ty-icon><document /></ty-icon>
          <span>Navigator Three</span>
        </ty-menu-item>
        <ty-menu-item index="4">
          <ty-icon><setting /></ty-icon>
          <span>Navigator Four</span>
        </ty-menu-item>
      </ty-menu>
    </ty-col>
  </ty-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
