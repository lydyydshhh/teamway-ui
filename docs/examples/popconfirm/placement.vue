<template>
  <div class="popconfirm-base-box">
    <div class="row center">
      <ty-popconfirm
        class="box-item"
        title="Top Left prompts info"
        placement="top-start"
      >
        <template #reference>
          <ty-button>top-start</ty-button>
        </template>
      </ty-popconfirm>
      <ty-popconfirm
        class="box-item"
        title="Top Center prompts info"
        placement="top"
      >
        <template #reference>
          <ty-button>top</ty-button>
        </template>
      </ty-popconfirm>
      <ty-popconfirm
        class="box-item"
        title="Top Right prompts info"
        placement="top-end"
      >
        <template #reference>
          <ty-button>top-end</ty-button>
        </template>
      </ty-popconfirm>
    </div>
    <div class="row">
      <ty-popconfirm
        class="box-item"
        title="Left Top prompts info"
        placement="left-start"
      >
        <template #reference>
          <ty-button>left-start</ty-button>
        </template>
      </ty-popconfirm>
      <ty-popconfirm
        class="box-item"
        title="Right Top prompts info"
        placement="right-start"
      >
        <template #reference>
          <ty-button>right-start</ty-button>
        </template>
      </ty-popconfirm>
    </div>
    <div class="row">
      <ty-popconfirm
        class="box-item"
        title="Left Center prompts info"
        placement="left"
      >
        <template #reference>
          <ty-button class="mt-3 mb-3">left</ty-button>
        </template>
      </ty-popconfirm>
      <ty-popconfirm
        class="box-item"
        title="Right Center prompts info"
        placement="right"
      >
        <template #reference>
          <ty-button>right</ty-button>
        </template>
      </ty-popconfirm>
    </div>
    <div class="row">
      <ty-popconfirm
        class="box-item"
        title="Left Bottom prompts info"
        placement="left-end"
      >
        <template #reference>
          <ty-button>left-end</ty-button>
        </template>
      </ty-popconfirm>
      <ty-popconfirm
        class="box-item"
        title="Right Bottom prompts info"
        placement="right-end"
      >
        <template #reference>
          <ty-button>right-end</ty-button>
        </template>
      </ty-popconfirm>
    </div>
    <div class="row center">
      <ty-popconfirm
        class="box-item"
        title="Bottom Left prompts info"
        placement="bottom-start"
      >
        <template #reference> <ty-button>bottom-start</ty-button></template>
      </ty-popconfirm>
      <ty-popconfirm
        class="box-item"
        title="Bottom Center prompts info"
        placement="bottom"
      >
        <template #reference> <ty-button>bottom</ty-button></template>
      </ty-popconfirm>
      <ty-popconfirm
        class="box-item"
        title="Bottom Right prompts info"
        placement="bottom-end"
      >
        <template #reference>
          <ty-button>bottom-end</ty-button>
        </template>
      </ty-popconfirm>
    </div>
  </div>
</template>

<style>
.popconfirm-base-box {
  width: 600px;
}

.popconfirm-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popconfirm-base-box .center {
  justify-content: center;
}

.popconfirm-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
