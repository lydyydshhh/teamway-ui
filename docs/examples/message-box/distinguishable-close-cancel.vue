<template>
  <ty-button plain @click="open">Click to open Message Box</ty-button>
</template>

<script lang="ts" setup>
import { TyMessage, TyMessageBox } from 'element-plus'

import type { Action } from 'element-plus'

const open = () => {
  TyMessageBox.confirm(
    'You have unsaved changes, save and proceed?',
    'Confirm',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Discard Changes',
    }
  )
    .then(() => {
      TyMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      })
    })
    .catch((action: Action) => {
      TyMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? 'Changes discarded. Proceeding to a new route.'
            : 'Stay in the current route',
      })
    })
}
</script>
