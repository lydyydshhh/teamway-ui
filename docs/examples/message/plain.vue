<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" :plain="true" @click="open5">Primary</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open1">Success</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open2">Warning</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open3">Info</ty-button>
    <ty-button class="!ml-0" :plain="true" @click="open4">Error</ty-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open1 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    plain: true,
  })
}
const open2 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    plain: true,
  })
}
const open3 = () => {
  ElMessage({
    message: 'This is a info message.',
    type: 'info',
    plain: true,
  })
}
const open4 = () => {
  ElMessage({
    message: 'Oops, this is a error message.',
    type: 'error',
    plain: true,
  })
}
const open5 = () => {
  ElMessage({
    message: 'This is a primary message.',
    type: 'primary',
    plain: true,
  })
}
</script>
