<template>
  <div style="max-width: 600px">
    <ty-alert title="Primary alert" type="primary" effect="dark" />
    <ty-alert title="Success alert" type="success" effect="dark" />
    <ty-alert title="Info alert" type="info" effect="dark" />
    <ty-alert title="Warning alert" type="warning" effect="dark" />
    <ty-alert title="Error alert" type="error" effect="dark" />
  </div>
</template>

<style scoped>
.ty-alert {
  margin: 20px 0 0;
}
.ty-alert:first-child {
  margin: 0;
}
</style>
