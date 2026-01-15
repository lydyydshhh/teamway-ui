<template>
  <ty-button :plain="true" @click="open">Show message</ty-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage({
    message: 'This is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>
