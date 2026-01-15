<template>
  <div class="affix-container">
    <ty-affix target=".affix-container" :offset="80">
      <ty-button type="primary">Target container</ty-button>
    </ty-affix>
  </div>
</template>

<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: var(--ty-color-primary-light-9);
}
</style>
