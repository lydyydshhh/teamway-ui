<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" plain @click="open1"> Top Right </ty-button>
    <ty-button class="!ml-0" plain @click="open2"> Bottom Right </ty-button>
    <ty-button class="!ml-0" plain @click="open3"> Bottom Left </ty-button>
    <ty-button class="!ml-0" plain @click="open4"> Top Left </ty-button>
  </div>
</template>

<script lang="ts" setup>
import { TyNotification } from 'element-plus'

const open1 = () => {
  TyNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  TyNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  TyNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  TyNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
