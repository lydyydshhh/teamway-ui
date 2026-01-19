<template>
  <ty-form
    ref="formRef"
    :model="dynamicValidateForm"
    label-width="120px"
    class="demo-dynamic"
  >
    <ty-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <ty-input v-model="dynamicValidateForm.email" />
    </ty-form-item>
    <ty-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }"
    >
      <ty-input v-model="domain.value" />
      <ty-button style="margin-top: 8px" @click.prevent="removeDomain(domain)"
        >Delete</ty-button
      >
    </ty-form-item>
    <ty-form-item>
      <ty-button type="primary" @click="submitForm(formRef)">Submit</ty-button>
      <ty-button @click="addDomain">New domain</ty-button>
      <ty-button @click="resetForm(formRef)">Reset</ty-button>
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'teamway-ui'

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
  })
}

const submitForm = (formTy: FormInstance | undefined) => {
  if (!formTy) return
  formTy.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formTy: FormInstance | undefined) => {
  if (!formTy) return
  formTy.resetFields()
}
</script>
