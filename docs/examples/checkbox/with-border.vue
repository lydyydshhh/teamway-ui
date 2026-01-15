<template>
  <div>
    <ty-checkbox v-model="checked1" label="Option1" size="large" border />
    <ty-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mt-4">
    <ty-checkbox v-model="checked3" label="Option1" border />
    <ty-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mt-4">
    <ty-checkbox-group v-model="checkboxGroup1" size="small">
      <ty-checkbox label="Option1" value="Value1" border />
      <ty-checkbox label="Option2" value="Value2" border />
    </ty-checkbox-group>
  </div>
  <div class="mt-4">
    <ty-checkbox-group v-model="checkboxGroup1" size="small">
      <ty-checkbox label="Option1" value="Value1" border disabled />
      <ty-checkbox label="Option2" value="Value2" border disabled />
    </ty-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Value1'])
</script>
