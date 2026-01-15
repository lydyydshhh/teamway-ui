<template>
  <ty-space direction="vertical">
    <ty-text>
      <ty-icon>
        <ElementPlus />
      </ty-icon>
      Element-Plus
    </ty-text>
    <ty-row>
      <ty-text>Rate</ty-text>
      <ty-rate class="ml-1" />
    </ty-row>
    <ty-text>
      This is text mixed icon
      <ty-icon>
        <Bell />
      </ty-icon>
      and component
      <ty-button>Button</ty-button>
    </ty-text>
  </ty-space>
</template>

<script lang="ts" setup>
import { Bell, ElementPlus } from '@element-plus/icons-vue'
</script>
