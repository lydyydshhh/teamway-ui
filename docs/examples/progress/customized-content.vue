<template>
  <div class="demo-progress">
    <ty-progress :percentage="50">
      <ty-button text>Content</ty-button>
    </ty-progress>
    <ty-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </ty-progress>
    <ty-progress type="circle" :percentage="100" status="success">
      <ty-button type="success" :icon="Check" circle />
    </ty-progress>
    <ty-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </ty-progress>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@element-plus/icons-vue'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
