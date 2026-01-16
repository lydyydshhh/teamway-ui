<template>
  <div class="flex flex-col items-center">
    <ty-switch
      v-model="disabled"
      active-text="Disabled"
      inactive-text="Enabled"
    />
    <ty-date-picker-panel v-model="value" :disabled="disabled" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
const disabled = ref(true)
</script>
