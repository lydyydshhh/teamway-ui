<template>
  <div>
    <ty-segmented v-model="trigger" :options="options" />
  </div>
  <br />
  <ty-input-tag v-model="input" :trigger="trigger" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EVENT_CODE } from 'teamway-ui'

const trigger = ref<'Enter' | 'Space'>('Space')
const input = ref<string[]>()
const options = [EVENT_CODE.enter, EVENT_CODE.space]
</script>
