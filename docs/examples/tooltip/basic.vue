<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <ty-button>top-start</ty-button>
      </ty-tooltip>
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <ty-button>top</ty-button>
      </ty-tooltip>
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <ty-button>top-end</ty-button>
      </ty-tooltip>
    </div>
    <div class="row">
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <ty-button>left-start</ty-button>
      </ty-tooltip>
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <ty-button>right-start</ty-button>
      </ty-tooltip>
    </div>
    <div class="row">
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <ty-button class="mt-3 mb-3">left</ty-button>
      </ty-tooltip>
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <ty-button>right</ty-button>
      </ty-tooltip>
    </div>
    <div class="row">
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <ty-button>left-end</ty-button>
      </ty-tooltip>
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <ty-button>right-end</ty-button>
      </ty-tooltip>
    </div>
    <div class="row center">
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <ty-button>bottom-start</ty-button>
      </ty-tooltip>
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <ty-button>bottom</ty-button>
      </ty-tooltip>
      <ty-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <ty-button>bottom-end</ty-button>
      </ty-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
