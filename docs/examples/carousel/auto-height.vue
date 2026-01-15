<template>
  <div class="block text-center" style="height: 300px">
    <span class="demonstration">each carousel-item has a different height</span>
    <ty-carousel height="auto" autoplay>
      <ty-carousel-item style="height: 100px">
        <h3 class="small justify-center" text="2xl">height 100px</h3>
      </ty-carousel-item>
      <ty-carousel-item style="height: 200px">
        <h3 class="small justify-center" text="2xl">height 200px</h3>
      </ty-carousel-item>
      <ty-carousel-item style="height: 300px">
        <h3 class="small justify-center" text="2xl">height 300px</h3>
      </ty-carousel-item>
    </ty-carousel>
  </div>
</template>

<style scoped>
.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.ty-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  display: flex;
  align-items: center;
  margin: 0;
  text-align: center;
  height: 100%;
}

.ty-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.ty-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
