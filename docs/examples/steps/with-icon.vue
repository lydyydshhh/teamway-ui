<template>
  <ty-steps style="max-width: 600px" :active="1">
    <ty-step title="Step 1" :icon="Edit" />
    <ty-step title="Step 2" :icon="Upload" />
    <ty-step title="Step 3" :icon="Picture" />
  </ty-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
</script>
