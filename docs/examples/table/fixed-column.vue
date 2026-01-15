<template>
  <ty-table :data="tableData" style="width: 100%">
    <ty-table-column fixed prop="date" label="Date" width="150" />
    <ty-table-column prop="name" label="Name" width="120" />
    <ty-table-column prop="state" label="State" width="120" />
    <ty-table-column prop="city" label="City" width="120" />
    <ty-table-column prop="address" label="Address" width="600" />
    <ty-table-column prop="zip" label="Zip" width="120" />
    <ty-table-column fixed="right" label="Operations" min-width="120">
      <template #default>
        <ty-button link type="primary" size="small" @click="handleClick">
          Detail
        </ty-button>
        <ty-button link type="primary" size="small">Edit</ty-button>
      </template>
    </ty-table-column>
  </ty-table>
</template>

<script lang="ts" setup>
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
</script>
