<template>
  <ty-button-group class="mb-4">
    <ty-button type="primary" :icon="ArrowLeft">Previous Page</ty-button>
    <ty-button type="primary">
      Next Page<ty-icon class="el-icon--right"><ArrowRight /></ty-icon>
    </ty-button>
  </ty-button-group>
  <br />
  <ty-radio-group v-model="direction" class="mb-2">
    <ty-radio value="horizontal">Horizontal</ty-radio>
    <ty-radio value="vertical">Vertical</ty-radio>
  </ty-radio-group>
  <br />

  <ty-button-group :direction="direction">
    <ty-button type="primary" :icon="House" />
    <ty-button type="primary" :icon="Operation" />
    <ty-button type="primary" :icon="Notification" />
  </ty-button-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowLeft,
  ArrowRight,
  House,
  Notification,
  Operation,
} from '@element-plus/icons-vue'

const direction = ref<'horizontal' | 'vertical'>('horizontal')
</script>
