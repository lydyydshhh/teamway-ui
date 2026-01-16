<template>
  <ty-menu
    :default-active="activeIndex"
    class="ty-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <ty-menu-item index="1">Processing Center</ty-menu-item>
    <ty-sub-menu index="2">
      <template #title>Workspace</template>
      <ty-menu-item index="2-1">item one</ty-menu-item>
      <ty-menu-item index="2-2">item two</ty-menu-item>
      <ty-menu-item index="2-3">item three</ty-menu-item>
      <ty-sub-menu index="2-4">
        <template #title>item four</template>
        <ty-menu-item index="2-4-1">item one</ty-menu-item>
        <ty-menu-item index="2-4-2">item two</ty-menu-item>
        <ty-menu-item index="2-4-3">item three</ty-menu-item>
      </ty-sub-menu>
    </ty-sub-menu>
    <ty-menu-item index="3" disabled>Info</ty-menu-item>
    <ty-menu-item index="4">Orders</ty-menu-item>
  </ty-menu>
  <div class="h-6" />
  <ty-menu
    :default-active="activeIndex2"
    class="ty-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <ty-menu-item index="1">Processing Center</ty-menu-item>
    <ty-sub-menu index="2">
      <template #title>Workspace</template>
      <ty-menu-item index="2-1">item one</ty-menu-item>
      <ty-menu-item index="2-2">item two</ty-menu-item>
      <ty-menu-item index="2-3">item three</ty-menu-item>
      <ty-sub-menu index="2-4">
        <template #title>item four</template>
        <ty-menu-item index="2-4-1">item one</ty-menu-item>
        <ty-menu-item index="2-4-2">item two</ty-menu-item>
        <ty-menu-item index="2-4-3">item three</ty-menu-item>
      </ty-sub-menu>
    </ty-sub-menu>
    <ty-menu-item index="3" disabled>Info</ty-menu-item>
    <ty-menu-item index="4">Orders</ty-menu-item>
  </ty-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
