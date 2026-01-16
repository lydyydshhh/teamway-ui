<template>
  <ty-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </ty-page-header>
</template>

<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
</script>
