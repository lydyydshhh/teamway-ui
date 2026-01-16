<template>
  <ty-rate v-model="value" size="large" />
  <br />
  <ty-rate v-model="value" />
  <br />
  <ty-rate v-model="value" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
