<template>
  <div ref="wrapperRef" :class="ns.b()">
    <ty-input
      v-bind="mergeProps(passInputProps, $attrs)"
      ref="elInputRef"
      :model-value="modelValue"
      :disabled="disabled"
      :role="dropdownVisible ? 'combobox' : undefined"
      :aria-activedescendant="dropdownVisible ? hoveringId || '' : undefined"
      :aria-controls="dropdownVisible ? contentId : undefined"
      :aria-expanded="dropdownVisible || undefined"
      :aria-label="ariaLabel"
      :aria-autocomplete="dropdownVisible ? 'none' : undefined"
      :aria-haspopup="dropdownVisible ? 'listbox' : undefined"
      @input="handleInputChange"
      @keydown="handleInputKeyDown"
      @mousedown="handleInputMouseDown"
    >
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </ty-input>
    <ty-tooltip
      ref="tooltipRef"
      :visible="dropdownVisible"
      :popper-class="[ns.e('popper'), popperClass!]"
      :popper-style="popperStyle"
      :popper-options="popperOptions"
      :placement="computedPlacement"
      :fallback-placements="computedFallbackPlacements"
      effect="light"
      pure
      :offset="offset"
      :show-arrow="showArrow"
    >
      <template #default>
        <div :style="cursorStyle" />
      </template>
      <template #content>
        <ty-mention-dropdown
          ref="dropdownRef"
          :options="filteredOptions"
          :disabled="disabled"
          :loading="loading"
          :content-id="contentId"
          :aria-label="ariaLabel"
          @select="handleSelect"
          @click.stop="elInputRef?.focus()"
        >
          <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
          </template>
        </ty-mention-dropdown>
      </template>
    </ty-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed, mergeProps, nextTick, ref } from 'vue'
import { pick } from 'lodash-unified'
import { useFocusController, useId, useNamespace } from '@element-plus/hooks'
import TyInput, { inputProps } from '@element-plus/components/input'
import TyTooltip from '@element-plus/components/tooltip'
import {
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { useFormDisabled } from '@element-plus/components/form'
import { getEventCode, isFunction } from '@element-plus/utils'
import { mentionDefaultProps, mentionEmits, mentionProps } from './mention'
import { getCursorPosition, getMentionCtx } from './helper'
import TyMentionDropdown from './mention-dropdown.vue'

import type { Placement } from '@popperjs/core'
import type { CSSProperties } from 'vue'
import type { InputInstance } from '@element-plus/components/input'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { MentionCtx, MentionOption } from './types'

defineOptions({
  name: 'TyMention',
  inheritAttrs: false,
})

const props = defineProps(mentionProps)
const emit = defineEmits(mentionEmits)

const passInputProps = computed(() => pick(props, Object.keys(inputProps)))

const ns = useNamespace('mention')
const disabled = useFormDisabled()
const contentId = useId()

const elInputRef = ref<InputInstance>()
const tooltipRef = ref<TooltipInstance>()
const dropdownRef = ref<InstanceType<typeof TyMentionDropdown>>()

const visible = ref(false)
const cursorStyle = ref<CSSProperties>()
const mentionCtx = ref<MentionCtx>()

const computedPlacement = computed<Placement>(() =>
  props.showArrow ? props.placement : `${props.placement}-start`
)

const computedFallbackPlacements = computed<Placement[]>(() =>
  props.showArrow ? ['bottom', 'top'] : ['bottom-start', 'top-start']
)

const aliasProps = computed(() => ({
  ...mentionDefaultProps,
  ...props.props,
}))

const mapOption = (option: MentionOption) => {
  const base = {
    label: option[aliasProps.value.label],
    value: option[aliasProps.value.value],
    disabled: option[aliasProps.value.disabled],
  }
  return { ...option, ...base }
}

const options = computed(() => props.options.map(mapOption))

const filteredOptions = computed(() => {
  const { filterOption } = props
  if (!mentionCtx.value || !filterOption) return options.value
  return options.value.filter((option) =>
    filterOption(mentionCtx.value!.pattern, option)
  )
})

const dropdownVisible = computed(() => {
  return visible.value && (!!filteredOptions.value.length || props.loading)
})

const hoveringId = computed(() => {
  return `${contentId.value}-${dropdownRef.value?.hoveringIndex}`
})

const handleInputChange = (value: string) => {
  emit(UPDATE_MODEL_EVENT, value)
  emit(INPUT_EVENT, value)
  syncAfterCursorMove()
}

const handleInputKeyDown = (event: KeyboardEvent | Event) => {
  if (elInputRef.value?.isComposing) return
  const code = getEventCode(event as KeyboardEvent)

  switch (code) {
    case EVENT_CODE.left:
    case EVENT_CODE.right:
      syncAfterCursorMove()
      break
    case EVENT_CODE.up:
    case EVENT_CODE.down:
      if (!visible.value) return
      event.preventDefault()
      dropdownRef.value?.navigateOptions(
        code === EVENT_CODE.up ? 'prev' : 'next'
      )
      break
    case EVENT_CODE.enter:
    case EVENT_CODE.numpadEnter:
      if (!visible.value) {
        props.type !== 'textarea' && syncAfterCursorMove()
        return
      }
      event.preventDefault()
      if (dropdownRef.value?.hoverOption) {
        dropdownRef.value?.selectHoverOption()
      } else {
        visible.value = false
      }
      break
    case EVENT_CODE.esc:
      if (!visible.value) return
      event.preventDefault()
      visible.value = false
      break
    case EVENT_CODE.backspace:
      if (props.whole && mentionCtx.value) {
        const { splitIndex, selectionEnd, pattern, prefixIndex, prefix } =
          mentionCtx.value
        const inputTy = getInputTy()
        if (!inputTy) return
        const inputValue = inputTy.value
        const matchOption = options.value.find((item) => item.value === pattern)
        const isWhole = isFunction(props.checkIsWhole)
          ? props.checkIsWhole(pattern, prefix)
          : matchOption
        if (isWhole && splitIndex !== -1 && splitIndex + 1 === selectionEnd) {
          event.preventDefault()
          const newValue =
            inputValue.slice(0, prefixIndex) + inputValue.slice(splitIndex + 1)
          emit(UPDATE_MODEL_EVENT, newValue)
          emit(INPUT_EVENT, newValue)
          emit('whole-remove', pattern, prefix)

          const newSelectionEnd = prefixIndex
          nextTick(() => {
            // input value is updated
            inputTy.selectionStart = newSelectionEnd
            inputTy.selectionEnd = newSelectionEnd
            syncDropdownVisible()
          })
        }
      }
  }
}

const { wrapperRef } = useFocusController(elInputRef, {
  disabled,
  afterFocus() {
    syncAfterCursorMove()
  },
  beforeBlur(event) {
    return tooltipRef.value?.isFocusInsideContent(event)
  },
  afterBlur() {
    visible.value = false
  },
})

const handleInputMouseDown = () => {
  syncAfterCursorMove()
}

// Ensure that the original option passed by users is returned
const getOriginalOption = (mentionOption: MentionOption) => {
  return props.options.find((option: MentionOption) => {
    return mentionOption.value === option[aliasProps.value.value]
  })
}

const handleSelect = (item: MentionOption) => {
  if (!mentionCtx.value) return
  const inputTy = getInputTy()
  if (!inputTy) return
  const inputValue = inputTy.value
  const { split } = props

  const newEndPart = inputValue.slice(mentionCtx.value.end)
  const alreadySeparated = newEndPart.startsWith(split)
  const newMiddlePart = `${item.value}${alreadySeparated ? '' : split}`

  const newValue =
    inputValue.slice(0, mentionCtx.value.start) + newMiddlePart + newEndPart

  emit(UPDATE_MODEL_EVENT, newValue)
  emit(INPUT_EVENT, newValue)
  emit('select', getOriginalOption(item)!, mentionCtx.value.prefix)

  const newSelectionEnd =
    mentionCtx.value.start + newMiddlePart.length + (alreadySeparated ? 1 : 0)

  nextTick(() => {
    // input value is updated
    inputTy.selectionStart = newSelectionEnd
    inputTy.selectionEnd = newSelectionEnd
    inputTy.focus()
    syncDropdownVisible()
  })
}

const getInputTy = () =>
  props.type === 'textarea'
    ? elInputRef.value?.textarea
    : elInputRef.value?.input

const syncAfterCursorMove = () => {
  // can't use nextTick(), get cursor position will be wrong
  setTimeout(() => {
    syncCursor()
    syncDropdownVisible()
    nextTick(() => tooltipRef.value?.updatePopper())
  }, 0)
}

const syncCursor = () => {
  const inputTy = getInputTy()
  if (!inputTy) return

  const caretPosition = getCursorPosition(inputTy)
  const inputRect = inputTy.getBoundingClientRect()
  const wrapperRect = wrapperRef.value!.getBoundingClientRect()

  cursorStyle.value = {
    position: 'absolute',
    width: 0,
    height: `${caretPosition.height}px`,
    left: `${caretPosition.left + inputRect.left - wrapperRect.left}px`,
    top: `${caretPosition.top + inputRect.top - wrapperRect.top}px`,
  }
}

const syncDropdownVisible = () => {
  const inputTy = getInputTy()
  if (document.activeElement !== inputTy) {
    visible.value = false
    return
  }
  const { prefix, split } = props
  mentionCtx.value = getMentionCtx(inputTy, prefix, split)
  if (mentionCtx.value && mentionCtx.value.splitIndex === -1) {
    visible.value = true
    emit('search', mentionCtx.value.pattern, mentionCtx.value.prefix)
    return
  }
  visible.value = false
}

defineExpose({
  input: elInputRef,
  tooltip: tooltipRef,
  dropdownVisible,
})
</script>
