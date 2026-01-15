<template>
  <div class="alignment-container">
    <ty-space>
      string
      <ty-button> button </ty-button>
      <ty-card>
        <template #header> header </template>
        body
      </ty-card>
    </ty-space>
  </div>
  <div class="alignment-container">
    <ty-space alignment="flex-start">
      string
      <ty-button> button </ty-button>
      <ty-card>
        <template #header> header </template>
        body
      </ty-card>
    </ty-space>
  </div>
  <div class="alignment-container">
    <ty-space alignment="flex-end">
      string
      <ty-button> button </ty-button>
      <ty-card>
        <template #header> header </template>
        body
      </ty-card>
    </ty-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--ty-border-color);
}
</style>
