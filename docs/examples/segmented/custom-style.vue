<template>
  <div class="custom-style">
    <ty-segmented v-model="value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Delicacy')

const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket']
</script>

<style scoped>
.custom-style .el-segmented {
  --ty-segmented-item-selected-color: var(--ty-text-color-primary);
  --ty-segmented-item-selected-bg-color: #ffd100;
  --ty-border-radius-base: 16px;
}
</style>
