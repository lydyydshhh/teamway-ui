<template>
  <div class="demo-progress">
    <ty-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <ty-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <ty-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <ty-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    />
  </div>
</template>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
