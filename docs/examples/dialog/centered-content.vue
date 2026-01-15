<template>
  <ty-button plain @click="centerDialogVisible = true">
    Click to open the Dialog
  </ty-button>

  <ty-dialog v-model="centerDialogVisible" title="Warning" width="500" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
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
