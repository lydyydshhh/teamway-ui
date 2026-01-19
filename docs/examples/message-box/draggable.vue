<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" plain @click="open">
      Open a draggable Message Box
    </ty-button>
    <ty-button class="!ml-0" plain @click="open2">
      Open a overflow draggable Message Box
    </ty-button>
    <ty-button class="!ml-0" plain @click="open3">
      Open a custom dragging style Message Box
    </ty-button>
  </div>
</template>

<script lang="ts" setup>
import { TyMessage, TyMessageBox } from 'teamway-ui'

const open = () => {
  TyMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      draggable: true,
    }
  )
    .then(() => {
      TyMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      TyMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const open2 = () => {
  TyMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      draggable: true,
      overflow: true,
    }
  )
    .then(() => {
      TyMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      TyMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const open3 = () => {
  TyMessageBox.confirm(
    'This message box has custom dragging styles. Try dragging it to see the effects!',
    'Custom Dragging Style',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'info',
      draggable: true,
      customClass: 'custom-dragging-message-box',
    }
  )
    .then(() => {
      TyMessage({
        type: 'success',
        message: 'Action completed',
      })
    })
    .catch(() => {
      TyMessage({
        type: 'info',
        message: 'Action canceled',
      })
    })
}
</script>

<style>
.custom-dragging-message-box.is-dragging {
  border: 2px dashed var(--ty-color-primary);
  opacity: 0.65;
}
</style>
