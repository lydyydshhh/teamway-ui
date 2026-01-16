<template>
  <ty-radio-group v-model="mode">
    <ty-radio-button label="start" value="start" />
    <ty-radio-button label="alternate" value="alternate" />
    <ty-radio-button label="alternate-reverse" value="alternate-reverse" />
    <ty-radio-button label="end" value="end" />
  </ty-radio-group>

  <ty-timeline class="mt-4" :mode="mode">
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

import type { TimelineProps } from 'element-plus'

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

const mode = ref<TimelineProps['mode']>('start')
</script>
