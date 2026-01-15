<template>
  <p class="text-center demonstration">normal vertical layout</p>
  <ty-carousel height="200px" direction="vertical" :autoplay="false">
    <ty-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </ty-carousel-item>
  </ty-carousel>
  <p class="text-center demonstration">card vertical layout</p>
  <ty-carousel
    height="400px"
    direction="vertical"
    type="card"
    :autoplay="false"
  >
    <ty-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </ty-carousel-item>
  </ty-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
