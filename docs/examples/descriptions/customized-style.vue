<template>
  <ty-descriptions title="Customized style list" :column="3" border>
    <ty-descriptions-item
      label="Username"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
    >
      kooriookami
    </ty-descriptions-item>
    <ty-descriptions-item label="Telephone" label-align="right" align="center">
      18100000000
    </ty-descriptions-item>
    <ty-descriptions-item label="Place" label-align="right" align="center">
      Suzhou
    </ty-descriptions-item>
    <ty-descriptions-item label="Remarks" label-align="right" align="center">
      <ty-tag size="small">School</ty-tag>
    </ty-descriptions-item>
    <ty-descriptions-item label="Address" label-align="right" align="center">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </ty-descriptions-item>
  </ty-descriptions>
</template>

<style scoped>
:deep(.my-label) {
  background: var(--ty-color-success-light-9) !important;
}
:deep(.my-content) {
  background: var(--ty-color-danger-light-9);
}
</style>
