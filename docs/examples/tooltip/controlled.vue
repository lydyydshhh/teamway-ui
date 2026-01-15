<template>
  <ty-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <ty-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </ty-button>
  </ty-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
