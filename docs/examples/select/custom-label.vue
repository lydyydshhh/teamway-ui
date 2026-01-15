<template>
  <div class="flex flex-wrap gap-4 items-center">
    <ty-select
      v-model="value1"
      placeholder="Select"
      style="width: 240px"
      clearable
    >
      <template #label="{ label, value }">
        <span>{{ label }}: </span>
        <span style="font-weight: bold">{{ value }}</span>
      </template>
      <ty-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ty-select>

    <ty-select
      v-model="value2"
      placeholder="Select"
      style="width: 240px"
      clearable
      multiple
    >
      <template #label="{ label, value }">
        <span>{{ label }}: </span>
        <span style="font-weight: bold">{{ value }}</span>
      </template>
      <ty-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ty-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<string>('Option1')
const value2 = ref<string[]>(['Option1'])
const options = [
  {
    value: 'Option1',
    label: 'Label1',
  },
  {
    value: 'Option2',
    label: 'Label2',
  },
  {
    value: 'Option3',
    label: 'Label3',
  },
  {
    value: 'Option4',
    label: 'Label4',
  },
  {
    value: 'Option5',
    label: 'Label5',
  },
]
</script>

<style scoped></style>
