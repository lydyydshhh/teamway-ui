<template>
  <ty-badge is-dot class="item">query</ty-badge>
  <ty-badge is-dot class="item">
    <ty-button class="share-button" :icon="Share" type="primary" />
  </ty-badge>
</template>

<script lang="ts" setup>
import { Share } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
