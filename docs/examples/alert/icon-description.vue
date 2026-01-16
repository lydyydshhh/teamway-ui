<template>
  <div style="max-width: 600px">
    <ty-alert
      title="Primary alert"
      type="primary"
      description="More text description"
      show-icon
    />
    <ty-alert
      title="Success alert"
      type="success"
      description="More text description"
      show-icon
    />
    <ty-alert
      title="Info alert"
      type="info"
      description="More text description"
      show-icon
    />
    <ty-alert
      title="Warning alert"
      type="warning"
      description="More text description"
      show-icon
    />
    <ty-alert
      title="Error alert"
      type="error"
      description="More text description"
      show-icon
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ty-alert {
  margin: 20px 0 0;
}
.ty-alert:first-child {
  margin: 0;
}
</style>
