<template>
  <ty-radio-group v-model="controllerType">
    <ty-radio-button label="select" value="select" />
    <ty-radio-button label="button" value="button" />
  </ty-radio-group>

  <ty-calendar v-model="value" :controller-type="controllerType" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const controllerType = ref<'select' | 'button'>('select')
const value = ref(new Date())
</script>
