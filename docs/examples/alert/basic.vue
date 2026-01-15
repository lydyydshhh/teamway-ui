<template>
  <div style="max-width: 600px">
    <ty-alert title="Primary alert" type="primary" />
    <ty-alert title="Success alert" type="success" />
    <ty-alert title="Info alert" type="info" />
    <ty-alert title="Warning alert" type="warning" />
    <ty-alert title="Error alert" type="error" />
  </div>
</template>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
