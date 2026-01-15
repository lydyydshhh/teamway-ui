<template>
  <ty-popconfirm
    width="220"
    :icon="InfoFilled"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
    @cancel="onCancel"
  >
    <template #reference>
      <ty-button>Delete</ty-button>
    </template>
    <template #actions="{ confirm, cancel }">
      <ty-button size="small" @click="cancel">No!</ty-button>
      <ty-button
        type="danger"
        size="small"
        :disabled="!clicked"
        @click="confirm"
      >
        Yes?
      </ty-button>
    </template>
  </ty-popconfirm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'

const clicked = ref(false)
function onCancel() {
  clicked.value = true
}
</script>
