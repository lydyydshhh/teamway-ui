<template>
  <ty-button plain @click="open"> Hide close button </ty-button>
</template>

<script lang="ts" setup>
import { TyNotification } from 'teamway-ui'

const open = () => {
  TyNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
