<template>
  <ty-button text @click="table = true">
    Open Drawer with nested table
  </ty-button>
  <ty-button text @click="dialog = true">
    Open Drawer with nested form
  </ty-button>
  <ty-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <ty-table :data="gridData">
      <ty-table-column property="date" label="Date" width="150" />
      <ty-table-column property="name" label="Name" width="200" />
      <ty-table-column property="address" label="Address" />
    </ty-table>
  </ty-drawer>

  <ty-drawer
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <ty-form :model="form">
        <ty-form-item label="Name" :label-width="formLabelWidth">
          <ty-input v-model="form.name" autocomplete="off" />
        </ty-form-item>
        <ty-form-item label="Area" :label-width="formLabelWidth">
          <ty-select
            v-model="form.region"
            placeholder="Please select activity area"
          >
            <ty-option label="Area1" value="shanghai" />
            <ty-option label="Area2" value="beijing" />
          </ty-select>
        </ty-form-item>
      </ty-form>
      <div class="demo-drawer__footer">
        <ty-button @click="cancelForm">Cancel</ty-button>
        <ty-button type="primary" :loading="loading" @click="onClick">
          {{ loading ? 'Submitting ...' : 'Submit' }}
        </ty-button>
      </div>
    </div>
  </ty-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { TyMessageBox } from 'teamway-ui'

const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

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
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]

const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    dialog.value = false
  }, 400)
}

const handleClose = (done) => {
  if (loading.value) {
    return
  }
  TyMessageBox.confirm('Do you want to submit?')
    .then(() => {
      loading.value = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
</script>
