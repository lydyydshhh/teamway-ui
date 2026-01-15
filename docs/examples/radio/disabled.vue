<template>
  <ty-radio v-model="radio" disabled value="disabled">Option A</ty-radio>
  <ty-radio v-model="radio" disabled value="selected and disabled">
    Option B
  </ty-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
