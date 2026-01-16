<template>
  <div>
    <ty-radio-group v-model="size" aria-label="size control">
      <ty-radio-button value="large">large</ty-radio-button>
      <ty-radio-button value="default">default</ty-radio-button>
      <ty-radio-button value="small">small</ty-radio-button>
    </ty-radio-group>
    <ty-radio-group v-model="labelPosition" aria-label="position control">
      <ty-radio-button value="left">Left</ty-radio-button>
      <ty-radio-button value="right">Right</ty-radio-button>
      <ty-radio-button value="top">Top</ty-radio-button>
    </ty-radio-group>
  </div>
  <br />
  <ty-form
    style="max-width: 600px"
    :model="sizeForm"
    label-width="auto"
    :label-position="labelPosition"
    :size="size"
  >
    <ty-form-item label="Activity name">
      <ty-input v-model="sizeForm.name" />
    </ty-form-item>
    <ty-form-item label="Activity zone">
      <ty-select
        v-model="sizeForm.region"
        placeholder="please select your zone"
      >
        <ty-option label="Zone one" value="shanghai" />
        <ty-option label="Zone two" value="beijing" />
      </ty-select>
    </ty-form-item>
    <ty-form-item label="Activity time">
      <ty-col :span="11">
        <ty-date-picker
          v-model="sizeForm.date1"
          type="date"
          aria-label="Pick a date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </ty-col>
      <ty-col class="text-center" :span="1" style="margin: 0 0.5rem">-</ty-col>
      <ty-col :span="11">
        <ty-time-picker
          v-model="sizeForm.date2"
          aria-label="Pick a time"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </ty-col>
    </ty-form-item>
    <ty-form-item label="Activity type">
      <ty-checkbox-group v-model="sizeForm.type">
        <ty-checkbox-button value="Online activities" name="type">
          Online activities
        </ty-checkbox-button>
        <ty-checkbox-button value="Promotion activities" name="type">
          Promotion activities
        </ty-checkbox-button>
      </ty-checkbox-group>
    </ty-form-item>
    <ty-form-item label="Resources">
      <ty-radio-group v-model="sizeForm.resource">
        <ty-radio border value="Sponsor">Sponsor</ty-radio>
        <ty-radio border value="Venue">Venue</ty-radio>
      </ty-radio-group>
    </ty-form-item>
    <ty-form-item>
      <ty-button type="primary" @click="onSubmit">Create</ty-button>
      <ty-button>Cancel</ty-button>
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { ComponentSize, FormProps } from 'element-plus'

const size = ref<ComponentSize>('default')
const labelPosition = ref<FormProps['labelPosition']>('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>

<style>
.ty-radio-group {
  margin-right: 12px;
}
</style>
