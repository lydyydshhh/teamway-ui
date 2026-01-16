<template>
  <ty-radio-group v-model="tableLayout" class="mb-2">
    <ty-radio-button value="fixed">fixed</ty-radio-button>
    <ty-radio-button value="auto">auto</ty-radio-button>
  </ty-radio-group>
  <ty-table :data="tableData" :table-layout="tableLayout">
    <ty-table-column prop="date" label="Date" />
    <ty-table-column prop="name" label="Name" />
    <ty-table-column prop="address" label="Address" />
  </ty-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TableInstance } from 'element-plus'

const tableLayout = ref<TableInstance['tableLayout']>('fixed')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
