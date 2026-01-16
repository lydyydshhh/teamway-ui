<template>
  <ty-button type="primary" @click="open = true">Begin Tour</ty-button>

  <ty-divider />

  <ty-space>
    <ty-button id="btn1">Upload</ty-button>
    <ty-button id="btn2" type="primary">Save</ty-button>
    <ty-button ref="btnRef" :icon="MoreFilled" />
  </ty-space>

  <ty-tour v-model="open">
    <ty-tour-step
      target="#btn1"
      title="Upload File"
      description="Put you files here."
    />
    <ty-tour-step :target="el" title="Save" description="Save your changes" />
    <ty-tour-step
      :target="btnRef?.$el"
      title="Other Actions"
      description="Click to see other"
    />
  </ty-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const el = () => document.querySelector<HTMLElement>('#btn2')
const btnRef = ref<ButtonInstance>()

const open = ref(false)
</script>
