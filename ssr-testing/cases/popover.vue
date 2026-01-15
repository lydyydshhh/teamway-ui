<template>
  <ty-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <ty-button>Focus to activate</ty-button>
    </template>
  </ty-popover>
</template>
