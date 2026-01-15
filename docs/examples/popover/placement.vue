<template>
  <div class="popover-base-box">
    <div class="row center">
      <ty-popover
        title="Title"
        content="Top Left prompts info"
        placement="top-start"
      >
        <template #reference>
          <ty-button>top-start</ty-button>
        </template>
      </ty-popover>
      <ty-popover
        title="Title"
        content="Top Center prompts info"
        placement="top"
      >
        <template #reference>
          <ty-button>top</ty-button>
        </template>
      </ty-popover>
      <ty-popover
        title="Title"
        content="Top Right prompts info"
        placement="top-end"
      >
        <template #reference>
          <ty-button>top-end</ty-button>
        </template>
      </ty-popover>
    </div>
    <div class="row">
      <ty-popover
        title="Title"
        content="Left Top prompts info"
        placement="left-start"
      >
        <template #reference>
          <ty-button>left-start</ty-button>
        </template>
      </ty-popover>
      <ty-popover
        title="Title"
        content="Right Top prompts info"
        placement="right-start"
      >
        <template #reference>
          <ty-button>right-start</ty-button>
        </template>
      </ty-popover>
    </div>
    <div class="row">
      <ty-popover
        title="Title"
        content="Left Center prompts info"
        placement="left"
      >
        <template #reference>
          <ty-button class="mt-3 mb-3">left</ty-button>
        </template>
      </ty-popover>
      <ty-popover
        title="Title"
        content="Right Center prompts info"
        placement="right"
      >
        <template #reference>
          <ty-button>right</ty-button>
        </template>
      </ty-popover>
    </div>
    <div class="row">
      <ty-popover
        title="Title"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <template #reference>
          <ty-button>left-end</ty-button>
        </template>
      </ty-popover>
      <ty-popover
        title="Title"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <template #reference>
          <ty-button>right-end</ty-button>
        </template>
      </ty-popover>
    </div>
    <div class="row center">
      <ty-popover
        title="Title"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <template #reference> <ty-button>bottom-start</ty-button></template>
      </ty-popover>
      <ty-popover
        title="Title"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <template #reference> <ty-button>bottom</ty-button></template>
      </ty-popover>
      <ty-popover
        title="Title"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <template #reference>
          <ty-button>bottom-end</ty-button>
        </template>
      </ty-popover>
    </div>
  </div>
</template>

<style>
.popover-base-box {
  width: 600px;
}

.popover-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popover-base-box .center {
  justify-content: center;
}
</style>
