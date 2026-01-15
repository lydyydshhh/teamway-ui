<template>
  <ty-switch v-model="reverse" active-text="reverse" />

  <ty-timeline class="mt-2" :reverse="reverse">
    <ty-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </ty-timeline-item>
  </ty-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const reverse = ref(true)
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
</script>
