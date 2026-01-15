<template>
  <ty-steps
    class="mb-4"
    style="max-width: 600px"
    :space="200"
    :active="1"
    simple
  >
    <ty-step title="Step 1" :icon="Edit" />
    <ty-step title="Step 2" :icon="UploadFilled" />
    <ty-step title="Step 3" :icon="Picture" />
  </ty-steps>

  <ty-steps style="max-width: 600px" :active="1" finish-status="success" simple>
    <ty-step title="Step 1" />
    <ty-step title="Step 2" />
    <ty-step title="Step 3" />
  </ty-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
</script>
