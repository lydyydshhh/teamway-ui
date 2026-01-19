<template>
  <ty-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <ty-form-item label="Password" prop="pass">
      <ty-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </ty-form-item>
    <ty-form-item label="Confirm" prop="checkPass">
      <ty-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </ty-form-item>
    <ty-form-item label="Age" prop="age">
      <ty-input v-model.number="ruleForm.age" />
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

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
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
