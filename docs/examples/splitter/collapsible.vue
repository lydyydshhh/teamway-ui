<template>
  <ty-switch
    v-model="isCollapsible"
    active-text="enable"
    inactive-text="disable"
    inline-prompt
    class="mb-2"
  />
  <div
    style="height: 250px; box-shadow: var(--ty-border-color-light) 0px 0px 10px"
  >
    <ty-splitter>
      <ty-splitter-panel :collapsible="isCollapsible" min="50">
        <div class="demo-panel">1</div>
      </ty-splitter-panel>
      <ty-splitter-panel :collapsible="isCollapsible">
        <div class="demo-panel">2</div>
      </ty-splitter-panel>
      <ty-splitter-panel>
        <div class="demo-panel">3</div>
      </ty-splitter-panel>
      <ty-splitter-panel :collapsible="isCollapsible">
        <ty-splitter layout="vertical">
          <ty-splitter-panel :collapsible="isCollapsible">
            <div class="demo-panel">4</div>
          </ty-splitter-panel>
          <ty-splitter-panel :collapsible="isCollapsible">
            <div class="demo-panel">5</div>
          </ty-splitter-panel>
        </ty-splitter>
      </ty-splitter-panel>
    </ty-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapsible = ref(true)
</script>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
