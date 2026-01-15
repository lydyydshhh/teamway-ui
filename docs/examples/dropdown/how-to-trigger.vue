<template>
  <ty-row class="block-col-2">
    <ty-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <ty-dropdown>
        <span class="el-dropdown-link">
          Dropdown List<ty-icon class="el-icon--right"><arrow-down /></ty-icon>
        </span>
        <template #dropdown>
          <ty-dropdown-menu>
            <ty-dropdown-item :icon="Plus">Action 1</ty-dropdown-item>
            <ty-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </ty-dropdown-item>
            <ty-dropdown-item :icon="CirclePlus">Action 3</ty-dropdown-item>
            <ty-dropdown-item :icon="Check">Action 4</ty-dropdown-item>
            <ty-dropdown-item :icon="CircleCheck">Action 5</ty-dropdown-item>
          </ty-dropdown-menu>
        </template>
      </ty-dropdown>
    </ty-col>
    <ty-col :span="8">
      <span class="demonstration">click to trigger</span>
      <ty-dropdown trigger="click">
        <span class="el-dropdown-link">
          Dropdown List<ty-icon class="el-icon--right"><arrow-down /></ty-icon>
        </span>
        <template #dropdown>
          <ty-dropdown-menu>
            <ty-dropdown-item :icon="Plus">Action 1</ty-dropdown-item>
            <ty-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </ty-dropdown-item>
            <ty-dropdown-item :icon="CirclePlus">Action 3</ty-dropdown-item>
            <ty-dropdown-item :icon="Check">Action 4</ty-dropdown-item>
            <ty-dropdown-item :icon="CircleCheck">Action 5</ty-dropdown-item>
          </ty-dropdown-menu>
        </template>
      </ty-dropdown>
    </ty-col>
    <ty-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <ty-dropdown trigger="contextmenu">
        <span class="el-dropdown-link">
          Dropdown List<ty-icon class="el-icon--right"><arrow-down /></ty-icon>
        </span>
        <template #dropdown>
          <ty-dropdown-menu>
            <ty-dropdown-item :icon="Plus">Action 1</ty-dropdown-item>
            <ty-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </ty-dropdown-item>
            <ty-dropdown-item :icon="CirclePlus">Action 3</ty-dropdown-item>
            <ty-dropdown-item :icon="Check">Action 4</ty-dropdown-item>
            <ty-dropdown-item :icon="CircleCheck">Action 5</ty-dropdown-item>
          </ty-dropdown-menu>
        </template>
      </ty-dropdown>
    </ty-col>
  </ty-row>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--ty-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block-col-2 .el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
