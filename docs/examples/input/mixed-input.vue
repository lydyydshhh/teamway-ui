<template>
  <div>
    <ty-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #prepend>Http://</template>
    </ty-input>
  </div>
  <div class="mt-4">
    <ty-input
      v-model="input2"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #append>.com</template>
    </ty-input>
  </div>
  <div class="mt-4">
    <ty-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <ty-select v-model="select" placeholder="Select" style="width: 115px">
          <ty-option label="Restaurant" value="1" />
          <ty-option label="Order No." value="2" />
          <ty-option label="Tel" value="3" />
        </ty-select>
      </template>
      <template #append>
        <ty-button :icon="Search" />
      </template>
    </ty-input>
  </div>
  <div class="mt-4">
    <ty-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <ty-button :icon="Search" />
      </template>
      <template #append>
        <ty-select v-model="select" placeholder="Select" style="width: 115px">
          <ty-option label="Restaurant" value="1" />
          <ty-option label="Order No." value="2" />
          <ty-option label="Tel" value="3" />
        </ty-select>
      </template>
    </ty-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--ty-fill-color-blank);
}
</style>
