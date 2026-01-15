<template>
  <ty-button type="primary" @click="drawer = true"> open </ty-button>

  <ty-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <ty-button @click="innerDrawer = true">Click me!</ty-button>
      <ty-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
        :before-close="handleClose"
      >
        <p>_(:зゝ∠)_</p>
      </ty-drawer>
    </div>
  </ty-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
