<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  shadow: 'always',
})
</script>

<template>
  Shadow:
  <div class="flex flex-col justify-center">
    <ty-radio-group v-model="config.shadow">
      <ty-radio value="always">always</ty-radio>
      <ty-radio value="hover">hover</ty-radio>
      <ty-radio value="never">never</ty-radio>
    </ty-radio-group>
    <ty-divider />
    <ty-config-provider :card="config">
      <ty-card>Card desu!</ty-card>
    </ty-config-provider>
  </div>
</template>
