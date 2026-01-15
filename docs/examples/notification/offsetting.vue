<template>
  <ty-button plain @click="open"> Notification with offset </ty-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

const open = () => {
  ElNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
