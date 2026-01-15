<template>
  <ty-tooltip content="Top center" placement="top">
    <ty-button>Dark</ty-button>
  </ty-tooltip>
  <ty-tooltip content="Bottom center" placement="bottom" effect="light">
    <ty-button>Light</ty-button>
  </ty-tooltip>

  <ty-tooltip content="Bottom center" effect="customized">
    <ty-button>Customized theme</ty-button>
  </ty-tooltip>
</template>

<style>
.ty-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.ty-popper.is-customized .ty-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
