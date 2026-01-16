<template>
  <div class="flex flex-wrap items-center gap-4">
    <ty-dropdown placement="top-start">
      <ty-button> topStart </ty-button>
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>The Action 1st</ty-dropdown-item>
          <ty-dropdown-item>The Action 2nd</ty-dropdown-item>
          <ty-dropdown-item>The Action 3rd</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
    <ty-dropdown placement="top">
      <ty-button> top </ty-button>
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>The Action 1st</ty-dropdown-item>
          <ty-dropdown-item>The Action 2nd</ty-dropdown-item>
          <ty-dropdown-item>The Action 3rd</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
    <ty-dropdown placement="top-end">
      <ty-button> topEnd </ty-button>
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>The Action 1st</ty-dropdown-item>
          <ty-dropdown-item>The Action 2nd</ty-dropdown-item>
          <ty-dropdown-item>The Action 3rd</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
    <ty-dropdown placement="bottom-start">
      <ty-button> bottomStart </ty-button>
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>The Action 1st</ty-dropdown-item>
          <ty-dropdown-item>The Action 2nd</ty-dropdown-item>
          <ty-dropdown-item>The Action 3rd</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
    <ty-dropdown placement="bottom">
      <ty-button> bottom </ty-button>
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>The Action 1st</ty-dropdown-item>
          <ty-dropdown-item>The Action 2nd</ty-dropdown-item>
          <ty-dropdown-item>The Action 3rd</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
    <ty-dropdown placement="bottom-end">
      <ty-button> bottomEnd </ty-button>
      <template #dropdown>
        <ty-dropdown-menu>
          <ty-dropdown-item>The Action 1st</ty-dropdown-item>
          <ty-dropdown-item>The Action 2nd</ty-dropdown-item>
          <ty-dropdown-item>The Action 3rd</ty-dropdown-item>
        </ty-dropdown-menu>
      </template>
    </ty-dropdown>
  </div>
</template>
