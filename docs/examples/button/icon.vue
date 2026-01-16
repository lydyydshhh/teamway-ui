<template>
  <div>
    <ty-button type="primary" :icon="Edit" />
    <ty-button type="primary" :icon="Share" />
    <ty-button type="primary" :icon="Delete" />
    <ty-button type="primary" :icon="Search">Search</ty-button>
    <ty-button type="primary">
      Upload<ty-icon class="ty-icon--right"><Upload /></ty-icon>
    </ty-button>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
