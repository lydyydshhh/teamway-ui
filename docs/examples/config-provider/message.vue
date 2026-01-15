<template>
  <div>
    <ty-config-provider :message="config">
      <ty-button @click="open">OPEN</ty-button>
    </ty-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const config = reactive({
  max: 3,
  plain: true,
  placement: 'bottom',
})

const open = () => {
  ElMessage('This is a message from bottom.')
}
</script>
