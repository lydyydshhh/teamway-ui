<template>
  <ty-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
  >
    <ty-form-item label="Activity name" prop="name">
      <ty-input v-model="ruleForm.name" />
    </ty-form-item>
    <ty-form-item label="Activity zone" prop="region">
      <ty-select v-model="ruleForm.region" placeholder="Activity zone">
        <ty-option label="Zone one" value="shanghai" />
        <ty-option label="Zone two" value="beijing" />
      </ty-select>
    </ty-form-item>
    <ty-form-item label="Activity count" prop="count">
      <ty-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </ty-form-item>
    <ty-form-item label="Activity time" required>
      <ty-col :span="11">
        <ty-form-item prop="date1">
          <ty-date-picker
            v-model="ruleForm.date1"
            type="date"
            aria-label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </ty-form-item>
      </ty-col>
      <ty-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </ty-col>
      <ty-col :span="11">
        <ty-form-item prop="date2">
          <ty-time-picker
            v-model="ruleForm.date2"
            aria-label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </ty-form-item>
      </ty-col>
    </ty-form-item>
    <ty-form-item label="Instant delivery" prop="delivery">
      <ty-switch v-model="ruleForm.delivery" />
    </ty-form-item>
    <ty-form-item label="Activity location" prop="location">
      <ty-segmented v-model="ruleForm.location" :options="locationOptions" />
    </ty-form-item>
    <ty-form-item label="Activity type" prop="type">
      <ty-checkbox-group v-model="ruleForm.type">
        <ty-checkbox value="Online activities" name="type">
          Online activities
        </ty-checkbox>
        <ty-checkbox value="Promotion activities" name="type">
          Promotion activities
        </ty-checkbox>
        <ty-checkbox value="Offline activities" name="type">
          Offline activities
        </ty-checkbox>
        <ty-checkbox value="Simple brand exposure" name="type">
          Simple brand exposure
        </ty-checkbox>
      </ty-checkbox-group>
    </ty-form-item>
    <ty-form-item label="Resources" prop="resource">
      <ty-radio-group v-model="ruleForm.resource">
        <ty-radio value="Sponsorship">Sponsorship</ty-radio>
        <ty-radio value="Venue">Venue</ty-radio>
      </ty-radio-group>
    </ty-form-item>
    <ty-form-item label="Activity form" prop="desc">
      <ty-input v-model="ruleForm.desc" type="textarea" />
    </ty-form-item>
    <ty-form-item>
      <ty-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </ty-button>
      <ty-button @click="resetForm(ruleFormRef)">Reset</ty-button>
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  location: string
  type: string[]
  resource: string
  desc: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: [],
  resource: '',
  desc: '',
})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  location: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
