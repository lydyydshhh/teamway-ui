<template>
  <ty-button @click="add">Add Item</ty-button>
  <ty-button @click="onDelete">Delete Item</ty-button>
  <ty-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </ty-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--ty-color-primary-light-9);
  color: var(--ty-color-primary);
}
</style>
