<template>
  <ty-steps style="max-width: 600px" :active="active" finish-status="success">
    <ty-step title="Step 1" />
    <ty-step title="Step 2" />
    <ty-step title="Step 3" />
  </ty-steps>

  <ty-button style="margin-top: 12px" @click="next">Next step</ty-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
