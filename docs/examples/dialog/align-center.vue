<template>
  <ty-button plain @click="centerDialogVisible = true">
    Click to open the Dialog
  </ty-button>

  <ty-dialog
    v-model="centerDialogVisible"
    title="Warning"
    width="500"
    align-center
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <ty-button @click="centerDialogVisible = false">Cancel</ty-button>
        <ty-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </ty-button>
      </div>
    </template>
  </ty-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
