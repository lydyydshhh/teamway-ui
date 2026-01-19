<template>
  <ty-form
    :label-position="labelPosition"
    label-width="auto"
    :model="formLabelAlign"
    style="max-width: 600px"
  >
    <ty-form-item label="Form Align" label-position="right">
      <ty-radio-group v-model="labelPosition" aria-label="label position">
        <ty-radio-button value="left">Left</ty-radio-button>
        <ty-radio-button value="right">Right</ty-radio-button>
        <ty-radio-button value="top">Top</ty-radio-button>
      </ty-radio-group>
    </ty-form-item>
    <ty-form-item label="Form Item Align" label-position="right">
      <ty-radio-group
        v-model="itemLabelPosition"
        aria-label="item label position"
      >
        <ty-radio-button value="">Empty</ty-radio-button>
        <ty-radio-button value="left">Left</ty-radio-button>
        <ty-radio-button value="right">Right</ty-radio-button>
        <ty-radio-button value="top">Top</ty-radio-button>
      </ty-radio-group>
    </ty-form-item>
    <ty-form-item label="Name" :label-position="itemLabelPosition">
      <ty-input v-model="formLabelAlign.name" />
    </ty-form-item>
    <ty-form-item label="Activity zone" :label-position="itemLabelPosition">
      <ty-input v-model="formLabelAlign.region" />
    </ty-form-item>
    <ty-form-item label="Activity form" :label-position="itemLabelPosition">
      <ty-input v-model="formLabelAlign.type" />
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormItemProps, FormProps } from 'teamway-ui'

const labelPosition = ref<FormProps['labelPosition']>('right')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
