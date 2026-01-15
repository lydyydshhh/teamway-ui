<template>
  <ty-button plain @click="centerDialogVisible = true">
    Click to open Dialog
  </ty-button>

  <ty-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="500"
    destroy-on-close
    center
  >
    <span>
      Notice: before the dialog is opened for the first time, this node and the
      one below will not be rendered.
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
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
