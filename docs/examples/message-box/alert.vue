<template>
  <ty-button plain @click="open">Click to open the Message Box</ty-button>
</template>

<script lang="ts" setup>
import { TyMessage, TyMessageBox } from 'teamway-ui'

import type { Action } from 'teamway-ui'

const open = () => {
  TyMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      TyMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
