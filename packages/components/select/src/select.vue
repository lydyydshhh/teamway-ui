<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[nsSelect.b(), nsSelect.m(selectSize)]"
    @[mouseEnterEventName]="states.inputHovering = true"
    @mouseleave="states.inputHovering = false"
  >
    <ty-tooltip
      ref="tooltipRef"
      :visible="dropdownMenuVisible"
      :placement="placement"
      :teleported="teleported"
      :popper-class="[nsSelect.e('popper'), popperClass]"
      :popper-style="popperStyle"
      :popper-options="popperOptions"
      :fallback-placements="fallbackPlacements"
      :effect="effect"
      pure
      trigger="click"
      :transition="`${nsSelect.namespace.value}-zoom-in-top`"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :persistent="persistent"
      :append-to="appendTo"
      :show-arrow="showArrow"
      :offset="offset"
      @before-show="handleMenuEnter"
      @hide="states.isBeforeHide = false"
    >
      <template #default>
        <div
          ref="wrapperRef"
          :class="[
            nsSelect.e('wrapper'),
            nsSelect.is('focused', isFocused),
            nsSelect.is('hovering', states.inputHovering),
            nsSelect.is('filterable', filterable),
            nsSelect.is('disabled', selectDisabled),
          ]"
          @click.prevent="toggleMenu"
        >
          <div
            v-if="$slots.prefix"
            ref="prefixRef"
            :class="nsSelect.e('prefix')"
          >
            <slot name="prefix" />
          </div>
          <div
            ref="selectionRef"
            :class="[
              nsSelect.e('selection'),
              nsSelect.is(
                'near',
                multiple && !$slots.prefix && !!states.selected.length
              ),
            ]"
          >
            <slot
              v-if="multiple"
              name="tag"
              :data="states.selected"
              :delete-tag="deleteTag"
              :select-disabled="selectDisabled"
            >
              <div
                v-for="item in showTagList"
                :key="getValueKey(item)"
                :class="nsSelect.e('selected-item')"
              >
                <ty-tag
                  :closable="!selectDisabled && !item.isDisabled"
                  :size="collapseTagSize"
                  :type="tagType"
                  :effect="tagEffect"
                  disable-transitions
                  :style="tagStyle"
                  @close="deleteTag($event, item)"
                >
                  <span :class="nsSelect.e('tags-text')">
                    <slot
                      name="label"
                      :index="item.index"
                      :label="item.currentLabel"
                      :value="item.value"
                    >
                      {{ item.currentLabel }}
                    </slot>
                  </span>
                </ty-tag>
              </div>

              <ty-tooltip
                v-if="collapseTags && states.selected.length > maxCollapseTags"
                ref="tagTooltipRef"
                :disabled="dropdownMenuVisible || !collapseTagsTooltip"
                :fallback-placements="['bottom', 'top', 'right', 'left']"
                :effect="effect"
                placement="bottom"
                :popper-class="popperClass"
                :popper-style="popperStyle"
                :teleported="teleported"
                :popper-options="popperOptions"
              >
                <template #default>
                  <div
                    ref="collapseItemRef"
                    :class="nsSelect.e('selected-item')"
                  >
                    <ty-tag
                      :closable="false"
                      :size="collapseTagSize"
                      :type="tagType"
                      :effect="tagEffect"
                      disable-transitions
                      :style="collapseTagStyle"
                    >
                      <span :class="nsSelect.e('tags-text')">
                        + {{ states.selected.length - maxCollapseTags }}
                      </span>
                    </ty-tag>
                  </div>
                </template>
                <template #content>
                  <div ref="tagMenuRef" :class="nsSelect.e('selection')">
                    <div
                      v-for="item in collapseTagList"
                      :key="getValueKey(item)"
                      :class="nsSelect.e('selected-item')"
                    >
                      <ty-tag
                        class="in-tooltip"
                        :closable="!selectDisabled && !item.isDisabled"
                        :size="collapseTagSize"
                        :type="tagType"
                        :effect="tagEffect"
                        disable-transitions
                        @close="deleteTag($event, item)"
                      >
                        <span :class="nsSelect.e('tags-text')">
                          <slot
                            name="label"
                            :index="item.index"
                            :label="item.currentLabel"
                            :value="item.value"
                          >
                            {{ item.currentLabel }}
                          </slot>
                        </span>
                      </ty-tag>
                    </div>
                  </div>
                </template>
              </ty-tooltip>
            </slot>
            <div
              :class="[
                nsSelect.e('selected-item'),
                nsSelect.e('input-wrapper'),
                nsSelect.is('hidden', !filterable || selectDisabled),
              ]"
            >
              <input
                :id="inputId"
                ref="inputRef"
                v-model="states.inputValue"
                type="text"
                :name="name"
                :class="[nsSelect.e('input'), nsSelect.is(selectSize)]"
                :disabled="selectDisabled"
                :autocomplete="autocomplete"
                :style="inputStyle"
                :tabindex="tabindex"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                :aria-activedescendant="hoverOption?.id || ''"
                :aria-controls="contentId"
                :aria-expanded="dropdownMenuVisible"
                :aria-label="ariaLabel"
                aria-autocomplete="none"
                aria-haspopup="listbox"
                @keydown="handleKeydown"
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @input="onInput"
                @click.stop="toggleMenu"
              />
              <span
                v-if="filterable"
                ref="calculatorRef"
                aria-hidden="true"
                :class="nsSelect.e('input-calculator')"
                v-text="states.inputValue"
              />
            </div>
            <div
              v-if="shouldShowPlaceholder"
              :class="[
                nsSelect.e('selected-item'),
                nsSelect.e('placeholder'),
                nsSelect.is(
                  'transparent',
                  !hasModelValue || (expanded && !states.inputValue)
                ),
              ]"
            >
              <slot
                v-if="hasModelValue"
                name="label"
                :index="getOption(modelValue!).index"
                :label="currentPlaceholder"
                :value="modelValue"
              >
                <span>{{ currentPlaceholder }}</span>
              </slot>
              <span v-else>{{ currentPlaceholder }}</span>
            </div>
          </div>
          <div ref="suffixRef" :class="nsSelect.e('suffix')">
            <ty-icon
              v-if="iconComponent && !showClearBtn"
              :class="[nsSelect.e('caret'), nsSelect.e('icon'), iconReverse]"
            >
              <component :is="iconComponent" />
            </ty-icon>
            <ty-icon
              v-if="showClearBtn && clearIcon"
              :class="[
                nsSelect.e('caret'),
                nsSelect.e('icon'),
                nsSelect.e('clear'),
              ]"
              @click="handleClearClick"
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
      <template #content>
        <ty-select-menu ref="menuRef">
          <div
            v-if="$slots.header"
            :class="nsSelect.be('dropdown', 'header')"
            @click.stop
          >
            <slot name="header" />
          </div>
          <ty-scrollbar
            v-show="states.options.size > 0 && !loading"
            :id="contentId"
            ref="scrollbarRef"
            tag="ul"
            :wrap-class="nsSelect.be('dropdown', 'wrap')"
            :view-class="nsSelect.be('dropdown', 'list')"
            :class="[nsSelect.is('empty', filteredOptionsCount === 0)]"
            role="listbox"
            :aria-label="ariaLabel"
            aria-orientation="vertical"
            @scroll="popupScroll"
          >
            <ty-option
              v-if="showNewOption"
              :value="states.inputValue"
              :created="true"
            />
            <ty-options>
              <slot>
                <template v-for="(option, index) in options" :key="index">
                  <ty-option-group
                    v-if="getOptions(option)?.length"
                    :label="getLabel(option)"
                    :disabled="getDisabled(option)"
                  >
                    <ty-option
                      v-for="item in getOptions(option)"
                      :key="getValue(item)"
                      v-bind="getOptionProps(item)"
                    />
                  </ty-option-group>
                  <ty-option v-else v-bind="getOptionProps(option)" />
                </template>
              </slot>
            </ty-options>
          </ty-scrollbar>
          <div
            v-if="$slots.loading && loading"
            :class="nsSelect.be('dropdown', 'loading')"
          >
            <slot name="loading" />
          </div>
          <div
            v-else-if="loading || filteredOptionsCount === 0"
            :class="nsSelect.be('dropdown', 'empty')"
          >
            <slot name="empty">
              <span>{{ emptyText }}</span>
            </slot>
          </div>
          <div
            v-if="$slots.footer"
            :class="nsSelect.be('dropdown', 'footer')"
            @click.stop
          >
            <slot name="footer" />
          </div>
        </ty-select-menu>
      </template>
    </ty-tooltip>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onBeforeUnmount,
  provide,
  reactive,
  toRefs,
  watch,
} from 'vue'
import { ClickOutside } from '@teamway-ui/directives'
import TyTooltip from '@teamway-ui/components/tooltip'
import TyScrollbar from '@teamway-ui/components/scrollbar'
import TyTag from '@teamway-ui/components/tag'
import TyIcon from '@teamway-ui/components/icon'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@teamway-ui/constants'
import { flattedChildren, isArray, isObject } from '@teamway-ui/utils'
import { useCalcInputWidth } from '@teamway-ui/hooks'
import { useProps } from '@teamway-ui/components/select-v2/src/useProps'
import TyOption from './option.vue'
import TySelectMenu from './select-dropdown.vue'
import { useSelect } from './useSelect'
import { selectKey } from './token'
import TyOptions from './options'
import { selectProps } from './select'
import TyOptionGroup from './option-group.vue'

import type { AppConfig, AppContext, VNode } from 'vue'
import type { SelectContext } from './type'

const COMPONENT_NAME = 'TySelect'

type WarnHandler = AppConfig['warnHandler']

interface WarnHandlerRecord {
  originalWarnHandler: WarnHandler
  handler: WarnHandler
  count: number
}

const warnHandlerMap = new WeakMap<AppContext, WarnHandlerRecord>()

const createSelectWarnHandler = (appContext: AppContext): WarnHandler => {
  return (...args) => {
    // Overrides warnings about slots not being executable outside of a render function.
    // We call slot below just to simulate data when persist is false, this warning message should be ignored
    const message = args[0]
    if (
      !message ||
      (message.includes(
        'Slot "default" invoked outside of the render function'
      ) &&
        args[2]?.includes('TyTreeSelect'))
    )
      return
    const original = warnHandlerMap.get(appContext)?.originalWarnHandler
    if (original) {
      original(...args)
      return
    }
    // eslint-disable-next-line no-console
    console.warn(...args)
  }
}

const getWarnHandlerRecord = (appContext: AppContext): WarnHandlerRecord => {
  let record = warnHandlerMap.get(appContext)
  if (!record) {
    record = {
      originalWarnHandler: appContext.config.warnHandler,
      handler: createSelectWarnHandler(appContext),
      count: 0,
    }
    warnHandlerMap.set(appContext, record)
  }
  return record
}
export default defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    TySelectMenu,
    TyOption,
    TyOptions,
    TyOptionGroup,
    TyTag,
    TyScrollbar,
    TyTooltip,
    TyIcon,
  },
  directives: { ClickOutside },
  props: selectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'remove-tag',
    'clear',
    'visible-change',
    'focus',
    'blur',
    'popup-scroll',
  ],

  setup(props, { emit, slots }) {
    const instance = getCurrentInstance()!
    const warnRecord = getWarnHandlerRecord(instance.appContext)
    warnRecord.count += 1
    instance.appContext.config.warnHandler = warnRecord.handler
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props
      const fallback = multiple ? [] : undefined
      // When it is array, we check if this is multi-select.
      // Based on the result we get
      if (isArray(rawModelValue)) {
        return multiple ? rawModelValue : fallback
      }

      return multiple ? fallback : rawModelValue
    })

    const _props = reactive({
      ...toRefs(props),
      modelValue,
    })

    const API = useSelect(_props, emit)
    const { calculatorRef, inputStyle } = useCalcInputWidth()
    const { getLabel, getValue, getOptions, getDisabled } = useProps(props)

    const getOptionProps = (option: Record<string, any>) => ({
      label: getLabel(option),
      value: getValue(option),
      disabled: getDisabled(option),
    })

    const flatTreeSelectData = (data: any[]) => {
      return data.reduce((acc, item) => {
        acc.push(item)
        if (item.children && item.children.length > 0) {
          acc.push(...flatTreeSelectData(item.children))
        }
        return acc
      }, [])
    }

    const manuallyRenderSlots = (vnodes: VNode[] | undefined) => {
      // After option rendering is completed, the useSelect internal state can collect the value of each option.
      // If the persistent value is false, option will not be rendered by default, so in this case,
      // manually render and load option data here.
      const children = flattedChildren(vnodes || []) as VNode[]
      children.forEach((item) => {
        if (
          isObject(item) &&
          // @ts-expect-error
          (item.type.name === 'TyOption' || item.type.name === 'TyTree')
        ) {
          // @ts-expect-error
          const _name = item.type.name
          if (_name === 'TyTree') {
            // tree-select component is a special case.
            // So we need to handle it separately.
            const treeData = item.props?.data || []
            const flatData = flatTreeSelectData(treeData)
            flatData.forEach((treeItem: any) => {
              treeItem.currentLabel =
                treeItem.label ||
                (isObject(treeItem.value) ? '' : treeItem.value)
              API.onOptionCreate(treeItem)
            })
          } else if (_name === 'TyOption') {
            const obj = { ...item.props } as any
            obj.currentLabel =
              obj.label || (isObject(obj.value) ? '' : obj.value)
            API.onOptionCreate(obj)
          }
        }
      })
    }
    watch(
      () => [slots.default?.(), modelValue.value],
      () => {
        // When persistent is false and the dropdown is closed, the menu is unmounted.
        // We should always re-hydrate option data from slots so labels stay in sync
        // with dynamic option list updates. Skip only when persistent is true or
        // when the dropdown is currently expanded (mounted options will manage themselves).
        if (props.persistent || API.expanded.value) {
          // If persistent is true, we don't need to manually render slots.
          return
        }
        // Reset current options snapshot before re-collecting from slots.
        API.states.options.clear()
        manuallyRenderSlots(slots.default?.())
      },
      {
        immediate: true,
      }
    )

    provide(
      selectKey,
      reactive({
        props: _props,
        states: API.states,
        selectRef: API.selectRef,
        optionsArray: API.optionsArray,
        setSelected: API.setSelected,
        handleOptionSelect: API.handleOptionSelect,
        onOptionCreate: API.onOptionCreate,
        onOptionDestroy: API.onOptionDestroy,
      }) satisfies SelectContext
    )

    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel
      }
      return API.states.selected.map((i) => i.currentLabel as string)
    })

    onBeforeUnmount(() => {
      // https://github.com/element-plus/element-plus/issues/21279
      const record = warnHandlerMap.get(instance.appContext)
      if (!record) return
      record.count -= 1
      if (record.count <= 0) {
        instance.appContext.config.warnHandler = record.originalWarnHandler
        warnHandlerMap.delete(instance.appContext)
      }
    })

    return {
      ...API,
      modelValue,
      selectedLabel,
      calculatorRef,
      inputStyle,
      getLabel,
      getValue,
      getOptions,
      getDisabled,
      getOptionProps,
    }
  },
})
</script>
