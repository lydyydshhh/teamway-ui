<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition name="ty-fade-in">
    <div v-if="show" />
  </Transition>
</template>
