<template>
  <ty-tooltip :content="'Switch value: ' + value" placement="top">
    <ty-switch
      v-model="value"
      style="--ty-switch-on-color: #13ce66; --ty-switch-off-color: #ff4949"
      active-value="100"
      inactive-value="0"
    />
  </ty-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('100')
</script>
