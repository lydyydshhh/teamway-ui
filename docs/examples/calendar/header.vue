<template>
  <ty-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <ty-button-group>
        <ty-button size="small" @click="selectDate('prev-year')">
          Previous Year
        </ty-button>
        <ty-button size="small" @click="selectDate('prev-month')">
          Previous Month
        </ty-button>
        <ty-button size="small" @click="selectDate('today')">Today</ty-button>
        <ty-button size="small" @click="selectDate('next-month')">
          Next Month
        </ty-button>
        <ty-button size="small" @click="selectDate('next-year')">
          Next Year
        </ty-button>
      </ty-button-group>
    </template>
  </ty-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { CalendarDateType, CalendarInstance } from 'element-plus'

const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>
