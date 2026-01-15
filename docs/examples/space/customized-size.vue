<template>
  <ty-slider v-model="size" />
  <ty-space wrap :size="size">
    <ty-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(20)
</script>
