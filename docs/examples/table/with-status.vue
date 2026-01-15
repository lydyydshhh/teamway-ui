<template>
  <ty-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <ty-table-column prop="date" label="Date" width="180" />
    <ty-table-column prop="name" label="Name" width="180" />
    <ty-table-column prop="address" label="Address" />
  </ty-table>
</template>

<script lang="ts" setup>
interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData: User[] = [
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

<style>
.el-table .warning-row {
  --ty-table-tr-bg-color: var(--ty-color-warning-light-9);
}
.el-table .success-row {
  --ty-table-tr-bg-color: var(--ty-color-success-light-9);
}
</style>
