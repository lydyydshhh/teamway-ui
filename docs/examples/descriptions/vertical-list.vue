<template>
  <ty-radio-group v-model="size">
    <ty-radio value="large">Large</ty-radio>
    <ty-radio value="default">Default</ty-radio>
    <ty-radio value="small">Small</ty-radio>
  </ty-radio-group>

  <ty-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <ty-descriptions-item label="Username">kooriookami</ty-descriptions-item>
    <ty-descriptions-item label="Telephone">18100000000</ty-descriptions-item>
    <ty-descriptions-item label="Place" :span="2">Suzhou</ty-descriptions-item>
    <ty-descriptions-item label="Remarks">
      <ty-tag size="small">School</ty-tag>
    </ty-descriptions-item>
    <ty-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </ty-descriptions-item>
  </ty-descriptions>

  <ty-descriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
    :style="blockMargin"
  >
    <ty-descriptions-item label="Username">kooriookami</ty-descriptions-item>
    <ty-descriptions-item label="Telephone">18100000000</ty-descriptions-item>
    <ty-descriptions-item label="Place" :span="2">Suzhou</ty-descriptions-item>
    <ty-descriptions-item label="Remarks">
      <ty-tag size="small">School</ty-tag>
    </ty-descriptions-item>
    <ty-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </ty-descriptions-item>
  </ty-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style scoped>
.ty-descriptions {
  margin-top: 20px;
}
</style>
