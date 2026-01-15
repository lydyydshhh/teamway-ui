<template>
  <ty-radio-group v-model="size">
    <ty-radio value="large">Large</ty-radio>
    <ty-radio value="default">Default</ty-radio>
    <ty-radio value="small">Small</ty-radio>
  </ty-radio-group>

  <ty-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <ty-button type="primary">Operation</ty-button>
    </template>
    <ty-descriptions-item>
      <template #label>
        <div class="cell-item">
          <ty-icon :style="iconStyle">
            <user />
          </ty-icon>
          Username
        </div>
      </template>
      kooriookami
    </ty-descriptions-item>
    <ty-descriptions-item>
      <template #label>
        <div class="cell-item">
          <ty-icon :style="iconStyle">
            <iphone />
          </ty-icon>
          Telephone
        </div>
      </template>
      18100000000
    </ty-descriptions-item>
    <ty-descriptions-item>
      <template #label>
        <div class="cell-item">
          <ty-icon :style="iconStyle">
            <location />
          </ty-icon>
          Place
        </div>
      </template>
      Suzhou
    </ty-descriptions-item>
    <ty-descriptions-item>
      <template #label>
        <div class="cell-item">
          <ty-icon :style="iconStyle">
            <tickets />
          </ty-icon>
          Remarks
        </div>
      </template>
      <ty-tag size="small">School</ty-tag>
    </ty-descriptions-item>
    <ty-descriptions-item>
      <template #label>
        <div class="cell-item">
          <ty-icon :style="iconStyle">
            <office-building />
          </ty-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </ty-descriptions-item>
  </ty-descriptions>

  <ty-descriptions
    class="margin-top"
    title="Without border"
    :column="3"
    :size="size"
    :style="blockMargin"
  >
    <template #extra>
      <ty-button type="primary">Operation</ty-button>
    </template>
    <ty-descriptions-item label="Username">kooriookami</ty-descriptions-item>
    <ty-descriptions-item label="Telephone">18100000000</ty-descriptions-item>
    <ty-descriptions-item label="Place">Suzhou</ty-descriptions-item>
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
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
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
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
