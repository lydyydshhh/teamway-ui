<template>
  <ty-space direction="vertical" alignment="start" :size="30">
    <ty-radio-group v-model="size">
      <ty-radio value="large">Large</ty-radio>
      <ty-radio value="default">Default</ty-radio>
      <ty-radio value="small">Small</ty-radio>
    </ty-radio-group>

    <ty-space wrap :size="size">
      <ty-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <ty-button class="button" text>Operation button</ty-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </ty-card>
    </ty-space>
  </ty-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')
</script>
