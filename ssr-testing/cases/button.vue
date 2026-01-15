<template>
  <ty-row style="margin-block-end: 8px">
    <ty-button size="large">Large</ty-button>
    <ty-button>Default</ty-button>
    <ty-button size="small">Small</ty-button>
    <ty-button size="large" :icon="Search">Search</ty-button>
    <ty-button :icon="Search">Search</ty-button>
    <ty-button size="small" :icon="Search">Search</ty-button>
  </ty-row>
  <ty-row style="margin-block-end: 8px">
    <ty-button size="large" round>Large</ty-button>
    <ty-button round>Default</ty-button>
    <ty-button size="small" round>Small</ty-button>
    <ty-button size="large" :icon="Search" round>Search</ty-button>
    <ty-button :icon="Search" round>Search</ty-button>
    <ty-button size="small" :icon="Search" round>Search</ty-button>
  </ty-row>
  <ty-row style="margin-block-end: 8px">
    <ty-button :icon="Search" size="large" circle />
    <ty-button :icon="Search" circle />
    <ty-button :icon="Search" size="small" circle />
  </ty-row>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
