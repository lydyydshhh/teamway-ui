<template>
  <ty-row class="row-bg">
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple-light" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
  <ty-row class="row-bg" justify="center">
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple-light" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
  <ty-row class="row-bg" justify="end">
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple-light" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
  <ty-row class="row-bg" justify="space-between">
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple-light" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
  <ty-row class="row-bg" justify="space-around">
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple-light" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
  </ty-row>
  <ty-row class="row-bg" justify="space-evenly">
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple-light" /></ty-col>
    <ty-col :span="6"><div class="grid-content ep-bg-purple" /></ty-col>
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
