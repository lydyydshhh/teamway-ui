<template>
  <ty-form :inline="true" :model="formInline" class="demo-form-inline">
    <ty-form-item label="Approved by">
      <ty-input v-model="formInline.user" placeholder="Approved by" clearable />
    </ty-form-item>
    <ty-form-item label="Activity zone">
      <ty-select
        v-model="formInline.region"
        placeholder="Activity zone"
        clearable
      >
        <ty-option label="Zone one" value="shanghai" />
        <ty-option label="Zone two" value="beijing" />
      </ty-select>
    </ty-form-item>
    <ty-form-item label="Activity time">
      <ty-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </ty-form-item>
    <ty-form-item>
      <ty-button type="primary" @click="onSubmit">Query</ty-button>
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.demo-form-inline .el-input {
  --ty-input-width: 220px;
}

.demo-form-inline .el-select {
  --ty-select-width: 220px;
}
</style>
