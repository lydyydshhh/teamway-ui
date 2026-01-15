<template>
  <ty-menu :default-active="activeIndex" class="ty-menu-demo" mode="horizontal">
    <ty-menu-item index="1">Processing Center</ty-menu-item>
    <ty-sub-menu index="2">
      <template #title>Workspace</template>
      <ty-menu-item index="2-1">item one</ty-menu-item>
    </ty-sub-menu>
    <ty-menu-item index="3" disabled>Info</ty-menu-item>
    <ty-menu-item index="4">Orders</ty-menu-item>
  </ty-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
</script>
