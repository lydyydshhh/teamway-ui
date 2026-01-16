<template>
  <ty-button type="text" @click="dialogVisible = true"
    >click to open the Dialog</ty-button
  >

  <ty-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <ty-button style="margin-right: 10px" @click="dialogVisible = false"
          >Cancel</ty-button
        >
        <ty-button type="primary" @click="dialogVisible = false"
          >Confirm</ty-button
        >
      </span>
    </template>
  </ty-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>
