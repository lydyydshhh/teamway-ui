<template>
  <div>
    <ty-radio-group v-model="radio1">
      <ty-radio value="1" size="large" border>Option A</ty-radio>
      <ty-radio value="2" size="large" border>Option B</ty-radio>
    </ty-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ty-radio-group v-model="radio2">
      <ty-radio value="1" border>Option A</ty-radio>
      <ty-radio value="2" border>Option B</ty-radio>
    </ty-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ty-radio-group v-model="radio3" size="small">
      <ty-radio value="1" border>Option A</ty-radio>
      <ty-radio value="2" border disabled>Option B</ty-radio>
    </ty-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ty-radio-group v-model="radio4" size="small" disabled>
      <ty-radio value="1" border>Option A</ty-radio>
      <ty-radio value="2" border>Option B</ty-radio>
    </ty-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>
