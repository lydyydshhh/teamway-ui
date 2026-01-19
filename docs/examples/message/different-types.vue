<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" :plain="true" @click="open5">Primary</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open2">Success</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open3">Warning</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open1">Info</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open4">Error</ty-button>
  </div>
</template>

<script lang="ts" setup>
import { TyMessage } from 'teamway-ui'

const open1 = () => {
  TyMessage('This is a info message.')
}
const open2 = () => {
  TyMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  TyMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  TyMessage.error('Oops, this is a error message.')
}
const open5 = () => {
  TyMessage.primary('This is a primary message.')
}
</script>
