<template>
  <div style="max-width: 600px">
    <ty-alert title="Primary alert" type="primary" show-icon />
    <ty-alert title="Success alert" type="success" show-icon />
    <ty-alert title="Info alert" type="info" show-icon />
    <ty-alert title="Warning alert" type="warning" show-icon />
    <ty-alert title="Error alert" type="error" show-icon />
    <ty-alert title="Error alert with custom icon" type="error" show-icon>
      <template #icon>
        <Bell />
      </template>
    </ty-alert>
  </div>
</template>

<script lang="ts" setup>
import { Bell } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
