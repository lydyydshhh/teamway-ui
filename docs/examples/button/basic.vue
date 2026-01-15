<template>
  <div class="button-example">
    <div class="button-row">
      <ty-button>Default</ty-button>
      <ty-button type="primary">Primary</ty-button>
      <ty-button type="success">Success</ty-button>
      <ty-button type="info">Info</ty-button>
      <ty-button type="warning">Warning</ty-button>
      <ty-button type="danger">Danger</ty-button>
    </div>

    <div class="button-row">
      <ty-button plain>Plain</ty-button>
      <ty-button type="primary" plain>Primary</ty-button>
      <ty-button type="success" plain>Success</ty-button>
      <ty-button type="info" plain>Info</ty-button>
      <ty-button type="warning" plain>Warning</ty-button>
      <ty-button type="danger" plain>Danger</ty-button>
    </div>

    <div class="button-row">
      <ty-button round>Round</ty-button>
      <ty-button type="primary" round>Primary</ty-button>
      <ty-button type="success" round>Success</ty-button>
      <ty-button type="info" round>Info</ty-button>
      <ty-button type="warning" round>Warning</ty-button>
      <ty-button type="danger" round>Danger</ty-button>
    </div>

    <div class="button-row">
      <ty-button :icon="Search" circle />
      <ty-button type="primary" :icon="Edit" circle />
      <ty-button type="success" :icon="Check" circle />
      <ty-button type="info" :icon="Message" circle />
      <ty-button type="warning" :icon="Star" circle />
      <ty-button type="danger" :icon="Delete" circle />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
