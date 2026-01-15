<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" :plain="true" @click="open6">Primary</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open2">Success</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open3">Warning</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open1">Info</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open4">Error</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open5">
      Won't close automatically
    </ty-button>
  </div>
</template>

<script lang="ts" setup>
import { TyMessage } from 'element-plus'

const open1 = () => {
  TyMessage({
    showClose: true,
    message: 'This is a info message.',
  })
}
const open2 = () => {
  TyMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  TyMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  TyMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
const open5 = () => {
  TyMessage({
    showClose: true,
    message: 'Oops, this is a message that does not automatically close.',
    duration: 0,
  })
}
const open6 = () => {
  TyMessage({
    showClose: true,
    message: 'This is a primary message.',
    type: 'primary',
  })
}
</script>
