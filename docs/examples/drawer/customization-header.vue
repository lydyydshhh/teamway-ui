<template>
  <ty-button @click="visible = true">
    Open Drawer with customized header
  </ty-button>
  <ty-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <ty-button type="danger" @click="close">
        <ty-icon class="ty-icon--left"><CircleCloseFilled /></ty-icon>
        Close
      </ty-button>
    </template>
    This is drawer content.
  </ty-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>
