<template>
  <ty-container class="layout-container-demo" style="height: 500px">
    <ty-aside width="200px">
      <ty-scrollbar>
        <ty-menu :default-openeds="['1', '3']">
          <ty-sub-menu index="1">
            <template #title>
              <ty-icon><message /></ty-icon>Navigator One
            </template>
            <ty-menu-item-group>
              <template #title>Group 1</template>
              <ty-menu-item index="1-1">Option 1</ty-menu-item>
              <ty-menu-item index="1-2">Option 2</ty-menu-item>
            </ty-menu-item-group>
            <ty-menu-item-group title="Group 2">
              <ty-menu-item index="1-3">Option 3</ty-menu-item>
            </ty-menu-item-group>
            <ty-sub-menu index="1-4">
              <template #title>Option4</template>
              <ty-menu-item index="1-4-1">Option 4-1</ty-menu-item>
            </ty-sub-menu>
          </ty-sub-menu>
          <ty-sub-menu index="2">
            <template #title>
              <ty-icon><icon-menu /></ty-icon>Navigator Two
            </template>
            <ty-menu-item-group>
              <template #title>Group 1</template>
              <ty-menu-item index="2-1">Option 1</ty-menu-item>
              <ty-menu-item index="2-2">Option 2</ty-menu-item>
            </ty-menu-item-group>
            <ty-menu-item-group title="Group 2">
              <ty-menu-item index="2-3">Option 3</ty-menu-item>
            </ty-menu-item-group>
            <ty-sub-menu index="2-4">
              <template #title>Option 4</template>
              <ty-menu-item index="2-4-1">Option 4-1</ty-menu-item>
            </ty-sub-menu>
          </ty-sub-menu>
          <ty-sub-menu index="3">
            <template #title>
              <ty-icon><setting /></ty-icon>Navigator Three
            </template>
            <ty-menu-item-group>
              <template #title>Group 1</template>
              <ty-menu-item index="3-1">Option 1</ty-menu-item>
              <ty-menu-item index="3-2">Option 2</ty-menu-item>
            </ty-menu-item-group>
            <ty-menu-item-group title="Group 2">
              <ty-menu-item index="3-3">Option 3</ty-menu-item>
            </ty-menu-item-group>
            <ty-sub-menu index="3-4">
              <template #title>Option 4</template>
              <ty-menu-item index="3-4-1">Option 4-1</ty-menu-item>
            </ty-sub-menu>
          </ty-sub-menu>
        </ty-menu>
      </ty-scrollbar>
    </ty-aside>

    <ty-container>
      <ty-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <ty-dropdown>
            <ty-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </ty-icon>
            <template #dropdown>
              <ty-dropdown-menu>
                <ty-dropdown-item>View</ty-dropdown-item>
                <ty-dropdown-item>Add</ty-dropdown-item>
                <ty-dropdown-item>Delete</ty-dropdown-item>
              </ty-dropdown-menu>
            </template>
          </ty-dropdown>
          <span>Tom</span>
        </div>
      </ty-header>

      <ty-main>
        <ty-scrollbar>
          <ty-table :data="tableData">
            <ty-table-column prop="date" label="Date" width="140" />
            <ty-table-column prop="name" label="Name" width="120" />
            <ty-table-column prop="address" label="Address" />
          </ty-table>
        </ty-scrollbar>
      </ty-main>
    </ty-container>
  </ty-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--ty-color-primary-light-7);
  color: var(--ty-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--ty-text-color-primary);
  background: var(--ty-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
