<template>
  <ty-button plain @click="open">Click to open Message Box</ty-button>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { TyMessage, TyMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'

const open = () => {
  TyMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Delete),
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
