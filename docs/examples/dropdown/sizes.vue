<template>
  <ty-dropdown size="large" split-button type="primary">
    Large
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item>Action 1</ty-dropdown-item>
        <ty-dropdown-item>Action 2</ty-dropdown-item>
        <ty-dropdown-item>Action 3</ty-dropdown-item>
        <ty-dropdown-item>Action 4</ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>

  <ty-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item>Action 1</ty-dropdown-item>
        <ty-dropdown-item>Action 2</ty-dropdown-item>
        <ty-dropdown-item>Action 3</ty-dropdown-item>
        <ty-dropdown-item>Action 4</ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>

  <ty-dropdown size="small" split-button type="primary">
    Small
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item>Action 1</ty-dropdown-item>
        <ty-dropdown-item>Action 2</ty-dropdown-item>
        <ty-dropdown-item>Action 3</ty-dropdown-item>
        <ty-dropdown-item>Action 4</ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>
</template>

<style scoped>
.example-showcase .ty-dropdown + .ty-dropdown {
  margin-left: 15px;
}
</style>
