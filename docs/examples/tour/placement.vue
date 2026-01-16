<template>
  <ty-button ref="btnRef" type="primary" @click="open = true">
    Begin Tour
  </ty-button>

  <ty-tour v-model="open">
    <ty-tour-step
      title="Center"
      description="Displayed in the center of screen."
    />
    <ty-tour-step
      title="Right"
      description="On the right of target."
      placement="right"
      :target="btnRef?.$el"
    />
    <ty-tour-step
      title="Top"
      description="On the top of target."
      placement="top"
      :target="btnRef?.$el"
    />
  </ty-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { ButtonInstance } from 'element-plus'

const btnRef = ref<ButtonInstance>()

const open = ref(false)
</script>
