<template>
  <ty-space direction="vertical">
    <ty-space>
      <ty-input-number v-model="num" />
      <ty-input-number v-model="num">
        <template #decrease-icon>
          <ty-icon>
            <ArrowDown />
          </ty-icon>
        </template>
        <template #increase-icon>
          <ty-icon>
            <ArrowUp />
          </ty-icon>
        </template>
      </ty-input-number>
    </ty-space>
    <ty-space>
      <ty-input-number v-model="num" controls-position="right" />
      <ty-input-number v-model="num" controls-position="right">
        <template #decrease-icon>
          <ty-icon>
            <Minus />
          </ty-icon>
        </template>
        <template #increase-icon>
          <ty-icon>
            <Plus />
          </ty-icon>
        </template>
      </ty-input-number>
    </ty-space>
  </ty-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'

const num = ref(1)
</script>
