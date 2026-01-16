<template>
  <ty-popover :visible="visible" placement="top" :width="180">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <ty-button size="small" text @click="visible = false">cancel</ty-button>
      <ty-button size="small" type="primary" @click="visible = false">
        confirm
      </ty-button>
    </div>
    <template #reference>
      <ty-button @click="visible = true">Delete</ty-button>
    </template>
  </ty-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
