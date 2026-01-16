<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div>
    <ty-button color="#626aef" :dark="isDark">Default</ty-button>
    <ty-button color="#626aef" :dark="isDark" plain>Plain</ty-button>

    <ty-button color="#626aef" :dark="isDark" disabled>Disabled</ty-button>
    <ty-button color="#626aef" :dark="isDark" disabled plain>
      Disabled Plain
    </ty-button>
  </div>
</template>
