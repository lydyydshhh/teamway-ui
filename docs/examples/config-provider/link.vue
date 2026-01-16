<template>
  <div>
    <div class="flex gap-4">
      <div class="flex flex-col basis-150px gap-1">
        <span>Type:</span>
        <ty-select v-model="config.type">
          <ty-option v-for="type in linkTypes" :key="type" :value="type" />
        </ty-select>
      </div>
      <div class="flex flex-col basis-150px gap-1">
        <span>Underline:</span>
        <ty-select v-model="config.underline">
          <ty-option
            v-for="type in underlineOptions"
            :key="type"
            :value="type"
          />
        </ty-select>
      </div>
    </div>
    <ty-divider />
    <ty-config-provider :link="config">
      <ty-link>Link desu!</ty-link>
    </ty-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const linkTypes = ['primary', 'success', 'warning', 'info', 'danger', 'default']
const underlineOptions = ['always', 'never', 'hover']

const config = reactive({
  type: 'success',
  underline: 'always',
})
</script>
