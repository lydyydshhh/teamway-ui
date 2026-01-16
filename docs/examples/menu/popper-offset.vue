<template>
  <ty-menu
    ellipsis
    class="ty-menu-popper-demo"
    mode="horizontal"
    :popper-offset="16"
    style="max-width: 600px"
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
    <ty-sub-menu index="3" :popper-offset="8">
      <template #title>Override Popper Offset</template>
      <ty-menu-item index="3-1">item one</ty-menu-item>
      <ty-menu-item index="3-2">item two</ty-menu-item>
      <ty-menu-item index="3-3">item three</ty-menu-item>
      <ty-sub-menu index="3-4" :popper-offset="20">
        <template #title>override child</template>
        <ty-menu-item index="3-4-1">item one</ty-menu-item>
        <ty-menu-item index="3-4-2">item two</ty-menu-item>
        <ty-menu-item index="3-4-3">item three</ty-menu-item>
      </ty-sub-menu>
    </ty-sub-menu>
    <ty-menu-item index="4" disabled>Info</ty-menu-item>
    <ty-menu-item index="5">Orders</ty-menu-item>
  </ty-menu>
</template>

<script lang="ts" setup></script>
