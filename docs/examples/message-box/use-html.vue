<template>
  <ty-button plain @click="open">Click to open Message Box</ty-button>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
