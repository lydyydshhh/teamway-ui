<template>
  <div
    ref="wrapperRef"
    :class="containerKls"
    :style="containerStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="slots.prefix" :class="ns.e('prefix')">
      <slot name="prefix" />
    </div>
    <div ref="innerRef" :class="innerKls">
      <ty-tag
        v-for="(item, index) in showTagList"
        :key="index"
        :size="tagSize"
        :closable="closable"
        :type="tagType"
        :effect="tagEffect"
        :draggable="closable && draggable"
        :style="tagStyle"
        disable-transitions
        @close="handleRemoveTag(index)"
        @dragstart="(event: DragEvent) => handleDragStart(event, index)"
        @dragover="(event: DragEvent) => handleDragOver(event, index)"
        @dragend="handleDragEnd"
        @drop.stop
      >
        <slot name="tag" :value="item" :index="index">
          {{ item }}
        </slot>
      </ty-tag>
      <ty-tooltip
        v-if="collapseTags && modelValue && modelValue.length > maxCollapseTags"
        ref="tagTooltipRef"
        :disabled="!collapseTagsTooltip"
        :fallback-placements="['bottom', 'top', 'right', 'left']"
        :effect="effect"
        placement="bottom"
      >
        <template #default>
          <div ref="collapseItemRef" :class="ns.e('collapse-tag')">
            <ty-tag
              :closable="false"
              :size="tagSize"
              :type="tagType"
              :effect="tagEffect"
              disable-transitions
            >
              + {{ modelValue.length - maxCollapseTags }}
            </ty-tag>
          </div>
        </template>
        <template #content>
          <div :class="ns.e('input-tag-list')">
            <ty-tag
              v-for="(item, index) in collapseTagList"
              :key="index"
              :size="tagSize"
              :closable="closable"
              :type="tagType"
              :effect="tagEffect"
              disable-transitions
              @close="handleRemoveTag(index + maxCollapseTags)"
            >
              <slot name="tag" :value="item" :index="index + maxCollapseTags">
                {{ item }}
              </slot>
            </ty-tag>
          </div>
        </template>
      </ty-tooltip>
      <div :class="ns.e('input-wrapper')">
        <input
          :id="inputId"
          ref="inputRef"
          v-model="inputValue"
          v-bind="attrs"
          type="text"
          :minlength="minlength"
          :maxlength="maxlength"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :tabindex="tabindex"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :ariaLabel="ariaLabel"
          :class="ns.e('input')"
          :style="inputStyle"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @input="handleInput"
          @keydown="handleKeydown"
          @keyup="handleKeyup"
        />
        <span
          ref="calculatorRef"
          aria-hidden="true"
          :class="ns.e('input-calculator')"
          v-text="inputValue"
        />
      </div>
      <div
        v-show="showDropIndicator"
        ref="dropIndicatorRef"
        :class="ns.e('drop-indicator')"
      />
    </div>
    <div v-if="showSuffix" :class="ns.e('suffix')">
      <slot name="suffix" />
      <ty-icon
        v-if="showClear"
        :class="[ns.e('icon'), ns.e('clear')]"
        @mousedown.prevent="NOOP"
        @click="handleClear"
      >
        <component :is="clearIcon" />
      </ty-icon>
      <ty-icon
        v-if="validateState && validateIcon && needStatusIcon"
        :class="[
          nsInput.e('icon'),
          nsInput.e('validateIcon'),
          nsInput.is('loading', validateState === 'validating'),
        ]"
      >
        <component :is="validateIcon" />
      </ty-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useAttrs, useCalcInputWidth } from '@teamway-ui/hooks'
import { NOOP, ValidateComponentsMap } from '@teamway-ui/utils'
import TyTooltip from '@teamway-ui/components/tooltip'
import TyIcon from '@teamway-ui/components/icon'
import TyTag from '@teamway-ui/components/tag'
import { useFormItem, useFormItemInputId } from '@teamway-ui/components/form'
import { inputTagEmits, inputTagProps } from './input-tag'
import {
  useDragTag,
  useHovering,
  useInputTag,
  useInputTagDom,
} from './composables'

defineOptions({
  name: 'TyInputTag',
  inheritAttrs: false,
})

const props = defineProps(inputTagProps)
const emit = defineEmits(inputTagEmits)

const attrs = useAttrs()
const slots = useSlots()
const { form, formItem } = useFormItem()
const { inputId } = useFormItemInputId(props, { formItemContext: formItem })

const needStatusIcon = computed(() => form?.statusIcon ?? false)
const validateState = computed(() => formItem?.validateState || '')
const validateIcon = computed(() => {
  return validateState.value && ValidateComponentsMap[validateState.value]
})

const {
  inputRef,
  wrapperRef,
  tagTooltipRef,
  isFocused,
  inputValue,
  size,
  tagSize,
  placeholder,
  closable,
  disabled,
  showTagList,
  collapseTagList,
  handleDragged,
  handleInput,
  handleKeydown,
  handleKeyup,
  handleRemoveTag,
  handleClear,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
  focus,
  blur,
} = useInputTag({ props, emit, formItem })
const { hovering, handleMouseEnter, handleMouseLeave } = useHovering()
const { calculatorRef, inputStyle } = useCalcInputWidth()
const {
  dropIndicatorRef,
  showDropIndicator,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
} = useDragTag({ wrapperRef, handleDragged, afterDragged: focus })
const {
  ns,
  nsInput,
  containerKls,
  containerStyle,
  innerKls,
  showClear,
  showSuffix,
  tagStyle,
  collapseItemRef,
  innerRef,
} = useInputTagDom({
  props,
  hovering,
  isFocused,
  inputValue,
  disabled,
  size,
  validateState,
  validateIcon,
  needStatusIcon,
})

defineExpose({
  focus,
  blur,
})
</script>
