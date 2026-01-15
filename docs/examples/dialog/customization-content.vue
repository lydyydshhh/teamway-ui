<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" plain @click="dialogTableVisible = true">
      Open a Table nested Dialog
    </ty-button>

    <ty-button class="!ml-0" plain @click="dialogFormVisible = true">
      Open a Form nested Dialog
    </ty-button>
  </div>

  <ty-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
    <ty-table :data="gridData">
      <ty-table-column property="date" label="Date" width="150" />
      <ty-table-column property="name" label="Name" width="200" />
      <ty-table-column property="address" label="Address" />
    </ty-table>
  </ty-dialog>

  <ty-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <ty-form :model="form">
      <ty-form-item label="Promotion name" :label-width="formLabelWidth">
        <ty-input v-model="form.name" autocomplete="off" />
      </ty-form-item>
      <ty-form-item label="Zones" :label-width="formLabelWidth">
        <ty-select v-model="form.region" placeholder="Please select a zone">
          <ty-option label="Zone No.1" value="shanghai" />
          <ty-option label="Zone No.2" value="beijing" />
        </ty-select>
      </ty-form-item>
    </ty-form>
    <template #footer>
      <div class="dialog-footer">
        <ty-button @click="dialogFormVisible = false">Cancel</ty-button>
        <ty-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </ty-button>
      </div>
    </template>
  </ty-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>
