<template>
  <div>
    <ty-link :icon="Edit">Edit</ty-link>
    <ty-link>
      Check<ty-icon class="el-icon--right"><icon-view /></ty-icon>
    </ty-link>
  </div>
</template>

<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-link {
  margin-right: 8px;
}
</style>
