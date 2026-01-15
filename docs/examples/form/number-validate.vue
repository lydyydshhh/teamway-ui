<template>
  <ty-form
    ref="formRef"
    style="max-width: 600px"
    :model="numberValidateForm"
    label-width="auto"
    class="demo-ruleForm"
  >
    <ty-form-item
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' },
      ]"
    >
      <ty-input
        v-model.number="numberValidateForm.age"
        type="text"
        autocomplete="off"
      />
    </ty-form-item>
    <ty-form-item>
      <ty-button type="primary" @click="submitForm(formRef)">Submit</ty-button>
      <ty-button @click="resetForm(formRef)">Reset</ty-button>
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  age: '',
})

const submitForm = (formTy: FormInstance | undefined) => {
  if (!formTy) return
  formTy.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formTy: FormInstance | undefined) => {
  if (!formTy) return
  formTy.resetFields()
}
</script>
