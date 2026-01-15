<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <ty-radio v-model="direction" value="horizontal">horizontal</ty-radio>
      <ty-radio v-model="direction" value="vertical">vertical</ty-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<ty-slider v-model="fillRatio" />
    </div>
    <ty-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <ty-card v-for="i in 5" :key="i" class="box-card">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { SpaceInstance } from 'element-plus'

const direction = ref<SpaceInstance['direction']>('horizontal')
const fillRatio = ref(30)
</script>
