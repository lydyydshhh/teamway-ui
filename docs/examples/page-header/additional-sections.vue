<template>
  <ty-page-header icon="">
    <template #content>
      <div class="flex items-center">
        <ty-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> Title </span>
        <span class="text-sm mr-2" style="color: var(--ty-text-color-regular)">
          Sub title
        </span>
        <ty-tag>Default</ty-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <ty-button>Print</ty-button>
        <ty-button type="primary" class="ml-2">Edit</ty-button>
      </div>
    </template>
  </ty-page-header>
</template>
