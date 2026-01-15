<template>
  <div class="block text-center">
    <span class="demonstration">Motion blur the switch (default)</span>
    <ty-carousel height="200px" motion-blur>
      <ty-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </ty-carousel-item>
    </ty-carousel>
  </div>
  <p class="text-center demonstration">Vertical effect</p>
  <ty-carousel
    height="200px"
    direction="vertical"
    motion-blur
    :autoplay="false"
  >
    <ty-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </ty-carousel-item>
  </ty-carousel>
</template>

<style scoped>
.demonstration {
  color: var(--ty-text-color-secondary);
}

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
