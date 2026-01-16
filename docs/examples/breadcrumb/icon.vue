<template>
  <ty-breadcrumb :separator-icon="ArrowRight">
    <ty-breadcrumb-item :to="{ path: '/' }">homepage</ty-breadcrumb-item>
    <ty-breadcrumb-item>promotion management</ty-breadcrumb-item>
    <ty-breadcrumb-item>promotion list</ty-breadcrumb-item>
    <ty-breadcrumb-item>promotion detail</ty-breadcrumb-item>
  </ty-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
