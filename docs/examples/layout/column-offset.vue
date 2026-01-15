<template>
  <ty-row :gutter="20">
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </ty-col>
  </ty-row>
  <ty-row :gutter="20">
    <ty-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </ty-col>
    <ty-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </ty-col>
  </ty-row>
  <ty-row :gutter="20">
    <ty-col :span="12" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </ty-col>
  </ty-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
