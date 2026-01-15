<template>
  <ty-button plain @click="open"> Use HTML String </ty-button>
</template>

<script lang="ts" setup>
import { TyNotification } from 'element-plus'

const open = () => {
  TyNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
