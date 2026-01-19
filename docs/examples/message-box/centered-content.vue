<template>
  <ty-button plain @click="open">Click to open Message Box</ty-button>
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
      center: true,
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
</script>
