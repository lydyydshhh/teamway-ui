<template>
  <ty-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
  >
    <ty-form-item label="name" prop="name">
      <ty-mention v-model="ruleForm.name" :options="options" />
    </ty-form-item>
    <ty-form-item label="desc" prop="desc">
      <ty-mention v-model="ruleForm.desc" type="textarea" :options="options" />
    </ty-form-item>
    <ty-form-item>
      <ty-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </ty-button>
      <ty-button @click="resetForm(ruleFormRef)">Reset</ty-button>
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'teamway-ui'

interface RuleForm {
  name: string
  desc: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  desc: '',
})

const options = ref([
  {
    label: 'Fuphoenixes',
    value: 'Fuphoenixes',
  },
  {
    label: 'kooriookami',
    value: 'kooriookami',
  },
  {
    label: 'Jeremy',
    value: 'Jeremy',
  },
  {
    label: 'btea',
    value: 'btea',
  },
])

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
  desc: [{ required: true, message: 'Please input desc', trigger: 'blur' }],
})

const submitForm = async (formTy: FormInstance | undefined) => {
  if (!formTy) return
  await formTy.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formTy: FormInstance | undefined) => {
  if (!formTy) return
  formTy.resetFields()
}
</script>
