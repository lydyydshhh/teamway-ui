<template>
  <ty-grid
    :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
    :row-gap="{ xs: 8, md: 12, xl: 16 }"
    :col-gap="{ xs: 8, md: 12, xl: 16 }"
    class="grid-demo"
  >
    <ty-grid-item
      v-for="i in 6"
      :key="i"
      class="item"
      :span="{ xs: 1, md: 1, xl: i === 6 ? 2 : 1 }"
    >
      item {{ i }}
    </ty-grid-item>
  </ty-grid>
</template>

<style scoped>
.grid-demo .item {
  min-height: 36px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-demo .item:nth-child(2n) {
  background: #99a9bf;
}

.grid-demo .item:nth-child(2n + 1) {
  background: #d3dce6;
}
</style>
