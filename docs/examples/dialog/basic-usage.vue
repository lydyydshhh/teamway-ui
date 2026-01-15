<template>
  <ty-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </ty-button>

  <ty-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <ty-button @click="dialogVisible = false">Cancel</ty-button>
        <ty-button type="primary" @click="dialogVisible = false">
          Confirm
        </ty-button>
      </div>
    </template>
  </ty-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
