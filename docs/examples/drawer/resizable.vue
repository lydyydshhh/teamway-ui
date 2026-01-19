<template>
  <ty-radio-group v-model="direction" @change="drawer = true">
    <ty-radio-button value="ttb">top</ty-radio-button>
    <ty-radio-button value="rtl">right</ty-radio-button>
    <ty-radio-button value="btt">bottom</ty-radio-button>
    <ty-radio-button value="ltr">left</ty-radio-button>
  </ty-radio-group>

  <ty-drawer v-model="drawer" :direction="direction" resizable>
    This is drawer content.
  </ty-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { DrawerProps } from 'teamway-ui'

const direction = ref<DrawerProps['direction']>()
const drawer = ref(false)
</script>
