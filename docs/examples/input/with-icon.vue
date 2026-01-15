<template>
  <div class="demo-input-with-icon">
    <div class="input-group">
      <span class="label">Using attributes</span>
      <div class="input-container">
        <ty-input
          v-model="input1"
          class="responsive-input"
          placeholder="Pick a date"
          :suffix-icon="Calendar"
        />
        <ty-input
          v-model="input2"
          class="responsive-input"
          placeholder="Type something"
          :prefix-icon="Search"
        />
      </div>
    </div>
    <div class="input-group">
      <span class="label">Using slots</span>
      <div class="input-container">
        <ty-input
          v-model="input3"
          class="responsive-input"
          placeholder="Pick a date"
        >
          <template #suffix>
            <ty-icon class="el-input__icon"><calendar /></ty-icon>
          </template>
        </ty-input>
        <ty-input
          v-model="input4"
          class="responsive-input"
          placeholder="Type something"
        >
          <template #prefix>
            <ty-icon class="el-input__icon"><search /></ty-icon>
          </template>
        </ty-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>

<style scoped>
.demo-input-with-icon {
  width: 100%;
}

.input-group {
  margin-bottom: 1.5rem;
}

.label {
  display: block;
  margin-bottom: 1rem;
  color: var(--ty-text-color-regular);
}

.input-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.responsive-input {
  width: 240px;
}

@media (max-width: 768px) {
  .input-container {
    flex-direction: column;
    gap: 1rem;
  }

  .responsive-input {
    width: 100%;
  }
}
</style>
