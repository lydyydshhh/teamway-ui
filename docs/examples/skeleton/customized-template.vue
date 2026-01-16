<template>
  <ty-skeleton style="width: 240px">
    <template #template>
      <ty-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <ty-skeleton-item variant="p" style="width: 50%" />
        <div
          style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          "
        >
          <ty-skeleton-item variant="text" style="margin-right: 16px" />
          <ty-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
  </ty-skeleton>
</template>
