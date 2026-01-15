<template>
  <ty-input-tag v-model="input" clearable placeholder="Please input">
    <template #prefix>
      <ty-icon><ElementPlus /></ty-icon>
    </template>
    <template #suffix>
      <ty-icon><Search /></ty-icon>
    </template>
  </ty-input-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElementPlus, Search } from '@element-plus/icons-vue'

const input = ref<string[]>()
</script>
