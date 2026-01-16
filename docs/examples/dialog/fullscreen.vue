<template>
  <ty-button plain @click="dialogVisible = true">
    Open the fullscreen Dialog
  </ty-button>

  <ty-dialog v-model="dialogVisible" fullscreen>
    <span>It's a fullscreen Dialog</span>
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

const dialogVisible = ref(false)
</script>
