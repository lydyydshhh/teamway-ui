<template>
  <div class="demo-progress">
    <ty-progress type="circle" :percentage="0" />
    <ty-progress type="circle" :percentage="25" />
    <ty-progress type="circle" :percentage="100" status="success" />
    <ty-progress type="circle" :percentage="70" status="warning" />
    <ty-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>

<style scoped>
.demo-progress .ty-progress--circle {
  margin-right: 15px;
}
</style>
