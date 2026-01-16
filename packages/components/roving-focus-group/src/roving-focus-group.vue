<template>
  <ty-focus-group-collection>
    <ty-roving-focus-group-impl v-bind="$attrs">
      <slot />
    </ty-roving-focus-group-impl>
  </ty-focus-group-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TyRovingFocusGroupImpl from './roving-focus-group-impl.vue'
import { TyCollection as TyFocusGroupCollection } from './roving-focus-group'

export default defineComponent({
  name: 'TyRovingFocusGroup',
  components: {
    TyFocusGroupCollection,
    TyRovingFocusGroupImpl,
  },
})
</script>
