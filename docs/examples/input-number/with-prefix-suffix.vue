<template>
  <ty-space>
    <ty-input-number v-model="num" :min="1" :max="10">
      <template #prefix>
        <span>￥</span>
      </template>
    </ty-input-number>
    <ty-input-number v-model="num" :min="1" :max="10">
      <template #suffix>
        <span>RMB</span>
      </template>
    </ty-input-number>
  </ty-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
