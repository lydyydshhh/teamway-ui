<template>
  <div style="max-width: 600px">
    <ty-alert title="Unclosable alert" type="success" :closable="false" />
    <ty-alert title="Customized close text" type="info" close-text="Gotcha" />
    <ty-alert title="Alert with callback" type="warning" @close="hello" />
  </div>
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!')
}
</script>

<style scoped>
.ty-alert {
  margin: 20px 0 0;
}
.ty-alert:first-child {
  margin: 0;
}
</style>
