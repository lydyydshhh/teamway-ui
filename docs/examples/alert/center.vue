<template>
  <div style="max-width: 600px">
    <ty-alert title="Primary alert" type="primary" center show-icon />
    <ty-alert title="Success alert" type="success" center show-icon />
    <ty-alert title="Info alert" type="info" center show-icon />
    <ty-alert title="Warning alert" type="warning" center show-icon />
    <ty-alert title="Error alert" type="error" center show-icon />
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
