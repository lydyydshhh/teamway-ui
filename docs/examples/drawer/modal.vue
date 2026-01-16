<template>
  <ty-button plain @click="drawerVisible = true">
    Open the modal Drawer
  </ty-button>

  <ty-drawer v-model="drawerVisible" :modal="false" modal-penetrable>
    <span>It's a modal Drawer</span>
    <template #footer>
      <div class="drawer-footer">
        <ty-button @click="drawerVisible = false">Cancel</ty-button>
        <ty-button type="primary" @click="drawerVisible = false">
          Confirm
        </ty-button>
      </div>
    </template>
  </ty-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawerVisible = ref(false)
</script>
