<template>
  <ty-radio-group v-model="direction">
    <ty-radio value="ltr">left to right</ty-radio>
    <ty-radio value="rtl">right to left</ty-radio>
    <ty-radio value="ttb">top to bottom</ty-radio>
    <ty-radio value="btt">bottom to top</ty-radio>
  </ty-radio-group>

  <ty-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </ty-button>
  <ty-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </ty-button>

  <ty-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </ty-drawer>
  <ty-drawer v-model="drawer2" :direction="direction">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <ty-radio v-model="radio1" value="Option 1" size="large">
          Option 1
        </ty-radio>
        <ty-radio v-model="radio1" value="Option 2" size="large">
          Option 2
        </ty-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <ty-button @click="cancelClick">cancel</ty-button>
        <ty-button type="primary" @click="confirmClick">confirm</ty-button>
      </div>
    </template>
  </ty-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

import type { DrawerProps } from 'element-plus'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
