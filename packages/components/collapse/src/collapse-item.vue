<template>
  <div :class="rootKls">
    <div
      :id="scopedHeadId"
      :class="headKls"
      :aria-expanded="isActive"
      :aria-controls="scopedContentId"
      :aria-describedby="scopedContentId"
      :tabindex="disabled ? undefined : 0"
      :aria-disabled="disabled"
      role="button"
      @click="handleHeaderClick"
      @keydown.space.enter.stop="handleEnterClick"
      @focus="handleFocus"
      @blur="focusing = false"
    >
      <span :class="itemTitleKls">
        <slot name="title" :is-active="isActive">{{ title }}</slot>
      </span>
      <slot name="icon" :is-active="isActive">
        <ty-icon :class="arrowKls">
          <component :is="icon" />
        </ty-icon>
      </slot>
    </div>

    <ty-collapse-transition>
      <div
        v-show="isActive"
        :id="scopedContentId"
        role="region"
        :class="itemWrapperKls"
        :aria-hidden="!isActive"
        :aria-labelledby="scopedHeadId"
      >
        <div :class="itemContentKls">
          <slot />
        </div>
      </div>
    </ty-collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import TyCollapseTransition from '@teamway-ui/components/collapse-transition'
import TyIcon from '@teamway-ui/components/icon'
import { collapseItemProps } from './collapse-item'
import { useCollapseItem, useCollapseItemDOM } from './use-collapse-item'

defineOptions({
  name: 'TyCollapseItem',
})

const props = defineProps(collapseItemProps)
const {
  focusing,
  id,
  isActive,
  handleFocus,
  handleHeaderClick,
  handleEnterClick,
} = useCollapseItem(props)

const {
  arrowKls,
  headKls,
  rootKls,
  itemTitleKls,
  itemWrapperKls,
  itemContentKls,
  scopedContentId,
  scopedHeadId,
} = useCollapseItemDOM(props, { focusing, isActive, id })

defineExpose({
  /** @description current collapse-item whether active */
  isActive,
})
</script>
