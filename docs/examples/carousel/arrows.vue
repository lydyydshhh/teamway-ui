<template>
  <ty-carousel :interval="5000" arrow="always">
    <ty-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </ty-carousel-item>
  </ty-carousel>
</template>

<style scoped>
.ty-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.ty-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.ty-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
