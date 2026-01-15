<template>
  <ty-button type="primary" @click="drawer = true"> open </ty-button>

  <ty-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </ty-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>
