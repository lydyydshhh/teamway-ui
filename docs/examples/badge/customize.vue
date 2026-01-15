<template>
  <ty-badge value="new" class="item">
    <ty-button>comments</ty-button>
  </ty-badge>
  <ty-badge value="hot" class="item">
    <ty-button>replies</ty-button>
  </ty-badge>
  <ty-badge value="99" class="item">
    <ty-button>share</ty-button>
    <template #content="{ value }">
      <div class="custom-content">
        <ty-icon>
          <Message />
        </ty-icon>
        <span>{{ value }}</span>
      </div>
    </template>
  </ty-badge>
</template>

<script setup lang="ts">
import { Message } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.custom-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
</style>
