<template>
  <ty-button type="primary" @click="open = true">Begin Tour</ty-button>

  <ty-divider />

  <ty-space>
    <ty-button ref="ref1">Upload</ty-button>
    <ty-button ref="ref2" type="primary">Save</ty-button>
    <ty-button ref="ref3" :icon="MoreFilled" />
  </ty-space>

  <ty-tour v-model="open">
    <ty-tour-step :target="ref1?.$el" title="Upload File">
      <img
        style="width: 240px"
        src="https://element-plus.org/images/element-plus-logo.svg"
        alt="tour.png"
      />
      <div>Put you files here.</div>
    </ty-tour-step>
    <ty-tour-step
      :target="ref2?.$el"
      title="Save"
      description="Save your changes"
    />
    <ty-tour-step
      :target="ref3?.$el"
      title="Other Actions"
      description="Click to see other"
    />
  </ty-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const ref1 = ref<ButtonInstance>()
const ref2 = ref<ButtonInstance>()
const ref3 = ref<ButtonInstance>()

const open = ref(false)
</script>
