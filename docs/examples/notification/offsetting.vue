<template>
  <ty-button plain @click="open"> Notification with offset </ty-button>
</template>

<script lang="ts" setup>
import { TyNotification } from 'element-plus'

const open = () => {
  TyNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
