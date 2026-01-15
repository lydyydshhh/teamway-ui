<template>
  <div class="button-example">
    <div class="button-row">
      <ty-button disabled>Default</ty-button>
      <ty-button type="primary" disabled>Primary</ty-button>
      <ty-button type="success" disabled>Success</ty-button>
      <ty-button type="info" disabled>Info</ty-button>
      <ty-button type="warning" disabled>Warning</ty-button>
      <ty-button type="danger" disabled>Danger</ty-button>
    </div>

    <div class="button-row">
      <ty-button plain disabled>Plain</ty-button>
      <ty-button type="primary" plain disabled>Primary</ty-button>
      <ty-button type="success" plain disabled>Success</ty-button>
      <ty-button type="info" plain disabled>Info</ty-button>
      <ty-button type="warning" plain disabled>Warning</ty-button>
      <ty-button type="danger" plain disabled>Danger</ty-button>
    </div>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
