<template>
  <ty-grid :cols="24" :row-gap="12" :col-gap="12" class="grid-demo">
    <ty-grid-item class="item ep-bg-purple" :span="2">2</ty-grid-item>
    <ty-grid-item class="item ep-bg-purple-light" :span="10">10</ty-grid-item>
    <ty-grid-item class="item ep-bg-purple" :span="10">10</ty-grid-item>
    <ty-grid-item class="item ep-bg-purple-light" :span="2">2</ty-grid-item>
    <ty-grid-item class="item ep-bg-purple" :span="12">12</ty-grid-item>
    <ty-grid-item class="item ep-bg-purple-light" :span="12">12</ty-grid-item>
    <ty-grid-item class="item ep-bg-purple-dark" :span="24">24</ty-grid-item>
  </ty-grid>
</template>

<style scoped>
.grid-demo .item {
  min-height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
