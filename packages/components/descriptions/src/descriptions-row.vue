<template>
  <template v-if="descriptions.direction === 'vertical'">
    <tr>
      <template v-for="(cell, _index) in row" :key="`tr1-${_index}`">
        <ty-descriptions-cell :cell="cell" tag="th" type="label" />
      </template>
    </tr>
    <tr>
      <template v-for="(cell, _index) in row" :key="`tr2-${_index}`">
        <ty-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
    </tr>
  </template>
  <tr v-else>
    <template v-for="(cell, _index) in row" :key="`tr3-${_index}`">
      <template v-if="descriptions.border">
        <ty-descriptions-cell :cell="cell" tag="td" type="label" />
        <ty-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
      <ty-descriptions-cell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import TyDescriptionsCell from './descriptions-cell'
import { descriptionsKey } from './token'
import { descriptionsRowProps } from './descriptions-row'

import type { IDescriptionsInject } from './descriptions.type'

defineOptions({
  name: 'TyDescriptionsRow',
})

defineProps(descriptionsRowProps)

const descriptions = inject(descriptionsKey, {} as IDescriptionsInject)
</script>
