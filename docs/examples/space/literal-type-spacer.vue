<template>
  <ty-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <ty-button> button {{ i }} </ty-button>
    </div>
  </ty-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>
