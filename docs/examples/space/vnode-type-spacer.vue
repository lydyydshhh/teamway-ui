<template>
  <ty-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <ty-button> button {{ i }} </ty-button>
    </div>
  </ty-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElDivider } from 'element-plus'

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })
</script>
