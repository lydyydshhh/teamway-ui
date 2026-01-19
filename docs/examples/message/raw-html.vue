<template>
  <ty-button :plain="true" @click="openHTML">Use HTML string</ty-button>
</template>

<script lang="ts" setup>
import { TyMessage } from 'teamway-ui'

const openHTML = () => {
  TyMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
