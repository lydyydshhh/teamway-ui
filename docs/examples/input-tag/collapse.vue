<template>
  <div class="m-4">
    <p>use collapse-tags</p>
    <ty-input-tag
      v-model="input1"
      collapse-tags
      placeholder="Please input"
      aria-label="Please click the Enter key after input"
    />
    <p>use collapse-tags-tooltip</p>
    <ty-input-tag
      v-model="input2"
      collapse-tags
      collapse-tags-tooltip
      placeholder="Please input"
      aria-label="Please click the Enter key after input"
    />
    <p>use max-collapse-tags</p>
    <ty-input-tag
      v-model="input3"
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      placeholder="Please input"
      aria-label="Please click the Enter key after input"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input1 = ref<string[]>()
const input2 = ref<string[]>()
const input3 = ref<string[]>()
</script>
