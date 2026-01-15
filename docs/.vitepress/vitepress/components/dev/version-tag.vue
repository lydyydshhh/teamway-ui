<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <ty-tag size="small" effect="plain" hit round>
    {{ version }}
  </ty-tag>
</template>
