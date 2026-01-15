<template>
  <ty-badge :value="200" :max="99" class="item">
    <ty-button>comments</ty-button>
  </ty-badge>
  <ty-badge :value="100" :max="10" class="item">
    <ty-button>replies</ty-button>
  </ty-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
