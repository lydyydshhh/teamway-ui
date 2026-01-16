<template>
  <div
    style="height: 250px; box-shadow: var(--ty-border-color-light) 0px 0px 10px"
  >
    <ty-splitter layout="vertical">
      <ty-splitter-panel>
        <div class="demo-panel">1</div>
      </ty-splitter-panel>
      <ty-splitter-panel>
        <div class="demo-panel">2</div>
      </ty-splitter-panel>
    </ty-splitter>
  </div>
</template>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
