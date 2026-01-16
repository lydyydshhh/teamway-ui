<template>
  <ty-radio-group v-model="radio">
    <ty-radio :value="3">Option A</ty-radio>
    <ty-radio :value="6">Option B</ty-radio>
    <ty-radio :value="9">Option C</ty-radio>
  </ty-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
