<template>
  <div>
    <div style="margin-bottom: 15px">fill: <ty-switch v-model="fill" /></div>
    <ty-space :fill="fill" wrap>
      <ty-card v-for="i in 3" :key="i" class="box-card">
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

const fill = ref(true)
</script>
