<template>
  <ty-button :plain="true" @click="open">Show message</ty-button>
</template>

<script lang="ts" setup>
import { TyMessage } from 'teamway-ui'

const open = () => {
  TyMessage({
    message: 'This is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>
