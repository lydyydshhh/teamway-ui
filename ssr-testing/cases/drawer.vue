<template>
  <ty-radio-group v-model="direction">
    <ty-radio label="ltr">left to right</ty-radio>
    <ty-radio label="rtl">right to left</ty-radio>
    <ty-radio label="ttb">top to bottom</ty-radio>
    <ty-radio label="btt">bottom to top</ty-radio>
  </ty-radio-group>

  <ty-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </ty-button>
  <ty-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </ty-button>

  <ty-drawer v-model="drawer" title="I am the title" :direction="direction">
    <span>Hi, there!</span>
  </ty-drawer>
  <ty-drawer v-model="drawer2" :direction="direction">
    <template #title>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <ty-radio v-model="radio1" label="Option 1" size="large"
          >Option 1</ty-radio
        >
        <ty-radio v-model="radio1" label="Option 2" size="large"
          >Option 2</ty-radio
        >
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <ty-button @click="cancelClick">cancel</ty-button>
        <ty-button type="primary">confirm</ty-button>
      </div>
    </template>
  </ty-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref<'rtl'>('rtl')
const radio1 = ref('Option 1')

function cancelClick() {
  drawer2.value = false
}
</script>
