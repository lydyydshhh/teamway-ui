<template>
  <ty-button plain @click="open"> Hide close button </ty-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

const open = () => {
  ElNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
