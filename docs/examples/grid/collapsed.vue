<template>
  <ty-form>
    <ty-form-item label="折叠"><ty-switch v-model="collapsed" /></ty-form-item>
    <ty-form-item label="折叠时显示的行数"
      ><ty-input-number
        v-model="collapsedRows"
        type="number"
        :min="1"
        :max="10"
        :collapsed-rows="collapsedRows"
    /></ty-form-item>
    <ty-grid
      :cols="3"
      :row-gap="10"
      :col-gap="10"
      :collapsed="collapsed"
      :collapsed-rows="collapsedRows"
      class="grid-demo"
    >
      <ty-grid-item v-for="i in 10" :key="i" class="item">
        item {{ i }}
      </ty-grid-item>
      <ty-grid-item suffix :span="2" class="suffix">
        <template #default="{ overflow }">
          {{ overflow ? '更多筛选' : '操作区' }}
        </template>
      </ty-grid-item>
    </ty-grid>
  </ty-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const collapsed = ref(false)
const collapsedRows = ref(1)
</script>

<style scoped>
.grid-demo .item,
.grid-demo .suffix {
  min-height: 36px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-demo .item:nth-child(2n) {
  background: #99a9bf;
}

.grid-demo .item:nth-child(2n + 1),
.grid-demo .suffix {
  background: #d3dce6;
}
</style>
