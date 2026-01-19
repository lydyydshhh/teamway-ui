<template>
  <ty-button plain @click="open">Click to open Message Box</ty-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { TyMessage, TyMessageBox } from 'teamway-ui'

const open = () => {
  TyMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = 'Loading...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    },
  }).then((action) => {
    TyMessage({
      type: 'info',
      message: `action: ${action}`,
    })
  })
}
</script>
