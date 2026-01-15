<template>
  <div>
    <ty-radio-group v-model="radio" size="large" fill="#409eff">
      <ty-radio-button label="New York" value="New York" />
      <ty-radio-button label="Washington" value="Washington" />
      <ty-radio-button label="Los Angeles" value="Los Angeles" />
      <ty-radio-button label="Chicago" value="Chicago" />
    </ty-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ty-radio-group v-model="radio" text-color="#fff" fill="#6c6cff">
      <ty-radio-button label="New York" value="New York" />
      <ty-radio-button label="Washington" value="Washington" />
      <ty-radio-button label="Los Angeles" value="Los Angeles" />
      <ty-radio-button label="Chicago" value="Chicago" />
    </ty-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ty-radio-group v-model="radio" size="small">
      <ty-radio-button label="New York" value="New York" />
      <ty-radio-button label="Washington" value="Washington" disabled />
      <ty-radio-button label="Los Angeles" value="Los Angeles" />
      <ty-radio-button label="Chicago" value="Chicago" />
    </ty-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('New York')
</script>
