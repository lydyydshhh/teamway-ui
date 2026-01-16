<template>
  <ty-row :gutter="20">
    <ty-col :span="16"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="8"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
  <ty-row :gutter="20">
    <ty-col :span="8"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="8"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="4"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="4"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
  <ty-row :gutter="20">
    <ty-col :span="4"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="16"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="4"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
</template>

<style>
.ty-row {
  margin-bottom: 20px;
}
.ty-row:last-child {
  margin-bottom: 0;
}
.ty-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
