<template>
  <ty-button plain @click="open">Click to open Message Box</ty-button>
</template>

<script lang="ts" setup>
import { TyMessage, TyMessageBox } from 'element-plus'

const open = () => {
  TyMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      TyMessage({
        type: 'success',
        message: `Your email is:${value}`,
      })
    })
    .catch(() => {
      TyMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>
