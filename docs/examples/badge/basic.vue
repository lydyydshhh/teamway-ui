<template>
  <ty-badge :value="12" class="item">
    <ty-button>comments</ty-button>
  </ty-badge>
  <ty-badge :value="3" class="item">
    <ty-button>replies</ty-button>
  </ty-badge>
  <ty-badge :value="1" class="item" type="primary">
    <ty-button>comments</ty-button>
  </ty-badge>
  <ty-badge :value="2" class="item" type="warning">
    <ty-button>replies</ty-button>
  </ty-badge>
  <ty-badge :value="1" class="item" color="green">
    <ty-button>custom background</ty-button>
  </ty-badge>
  <ty-dropdown trigger="click">
    <span class="ty-dropdown-link">
      Click Me
      <ty-icon class="ty-icon--right"><caret-bottom /></ty-icon>
    </span>
    <template #dropdown>
      <ty-dropdown-menu>
        <ty-dropdown-item class="clearfix">
          comments
          <ty-badge class="mark" :value="12" />
        </ty-dropdown-item>
        <ty-dropdown-item class="clearfix">
          replies
          <ty-badge class="mark" :value="3" />
        </ty-dropdown-item>
      </ty-dropdown-menu>
    </template>
  </ty-dropdown>
</template>

<script lang="ts" setup>
import { CaretBottom } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 30px;
}

.ty-dropdown {
  margin-top: 1.1rem;
}
</style>
