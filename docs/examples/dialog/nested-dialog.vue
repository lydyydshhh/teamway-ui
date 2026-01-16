<template>
  <ty-button plain @click="outerVisible = true">
    Open the outer Dialog
  </ty-button>

  <ty-dialog v-model="outerVisible" title="Outer Dialog" width="800">
    <span>This is the outer Dialog</span>
    <ty-dialog
      v-model="innerVisible"
      width="500"
      title="Inner Dialog"
      append-to-body
    >
      <span>This is the inner Dialog</span>
    </ty-dialog>
    <template #footer>
      <div class="dialog-footer">
        <ty-button @click="outerVisible = false">Cancel</ty-button>
        <ty-button type="primary" @click="innerVisible = true">
          Open the inner Dialog
        </ty-button>
      </div>
    </template>
  </ty-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
