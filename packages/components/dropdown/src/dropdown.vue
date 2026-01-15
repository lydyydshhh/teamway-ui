<template>
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <ty-tooltip
      ref="popperRef"
      :role="role"
      :effect="effect"
      :fallback-placements="['bottom', 'top']"
      :popper-options="popperOptions"
      :gpu-acceleration="false"
      :placement="placement"
      :popper-class="[ns.e('popper'), popperClass!]"
      :popper-style="popperStyle"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :trigger-target-el="contentRef"
      :show-arrow="showArrow"
      :show-after="trigger === 'hover' ? showTimeout : 0"
      :hide-after="trigger === 'hover' ? hideTimeout : 0"
      :virtual-ref="virtualRef ?? triggeringElementRef"
      :virtual-triggering="virtualTriggering || splitButton"
      :disabled="disabled"
      :transition="`${ns.namespace.value}-zoom-in-top`"
      :teleported="teleported"
      :append-to="appendTo"
      pure
      focus-on-target
      :persistent="persistent"
      @before-show="handleBeforeShowTooltip"
      @show="handleShowTooltip"
      @before-hide="handleBeforeHideTooltip"
    >
      <template #content>
        <ty-scrollbar
          ref="scrollbar"
          :wrap-style="wrapStyle"
          tag="div"
          :view-class="ns.e('list')"
        >
          <ty-roving-focus-group
            :loop="loop"
            :current-tab-id="currentTabId"
            orientation="horizontal"
            @current-tab-id-change="handleCurrentTabIdChange"
          >
            <slot name="dropdown" />
          </ty-roving-focus-group>
        </ty-scrollbar>
      </template>
      <template v-if="!splitButton" #default>
        <ty-only-child
          :id="triggerId"
          ref="triggeringElementRef"
          role="button"
          :tabindex="tabindex"
        >
          <slot name="default" />
        </ty-only-child>
      </template>
    </ty-tooltip>
    <template v-if="splitButton">
      <ty-button-group>
        <ty-button
          ref="referenceElementRef"
          v-bind="buttonProps"
          :size="dropdownSize"
          :type="type"
          :disabled="disabled"
          :tabindex="tabindex"
          @click="handlerMainButtonClick"
        >
          <slot name="default" />
        </ty-button>
        <ty-button
          :id="triggerId"
          ref="triggeringElementRef"
          v-bind="buttonProps"
          role="button"
          :size="dropdownSize"
          :type="type"
          :class="ns.e('caret-button')"
          :disabled="disabled"
          :tabindex="tabindex"
          :aria-label="t('el.dropdown.toggleDropdown')"
        >
          <ty-icon :class="ns.e('icon')"><arrow-down /></ty-icon>
        </ty-button>
      </ty-button-group>
    </template>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  toRef,
  unref,
} from 'vue'
import TyButton from '@element-plus/components/button'
import TyTooltip from '@element-plus/components/tooltip'
import TyScrollbar from '@element-plus/components/scrollbar'
import TyIcon from '@element-plus/components/icon'
import TyRovingFocusGroup from '@element-plus/components/roving-focus-group'
import { TyOnlyChild } from '@element-plus/components/slot'
import { useFormSize } from '@element-plus/components/form'
import { addUnit, ensureArray } from '@element-plus/utils'
import { ArrowDown } from '@element-plus/icons-vue'
import { useId, useLocale, useNamespace } from '@element-plus/hooks'
import { dropdownProps } from './dropdown'
import {
  DROPDOWN_INJECTION_KEY,
  DROPDOWN_INSTANCE_INJECTION_KEY,
} from './tokens'

import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { CSSProperties } from 'vue'

const { ButtonGroup: TyButtonGroup } = TyButton

export default defineComponent({
  name: 'TyDropdown',
  components: {
    TyButton,
    TyButtonGroup,
    TyScrollbar,
    TyTooltip,
    TyRovingFocusGroup,
    TyOnlyChild,
    TyIcon,
    ArrowDown,
  },
  props: dropdownProps,
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const ns = useNamespace('dropdown')
    const { t } = useLocale()

    const triggeringElementRef = ref()
    const referenceElementRef = ref()
    const popperRef = ref<TooltipInstance>()
    const contentRef = ref<HTMLElement>()
    const scrollbar = ref(null)
    const currentTabId = ref<string | null>(null)
    const isUsingKeyboard = ref(false)

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight),
    }))
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)])
    const trigger = computed(() => ensureArray(props.trigger))

    const defaultTriggerId = useId().value
    const triggerId = computed<string>(() => props.id || defaultTriggerId)

    function handleClick() {
      popperRef.value?.onClose(undefined, 0)
    }

    function handleClose() {
      popperRef.value?.onClose()
    }

    function handleOpen() {
      popperRef.value?.onOpen()
    }

    const dropdownSize = useFormSize()

    function commandHandler(...args: any[]) {
      emit('command', ...args)
    }

    function onItemEnter() {
      // NOOP for now
    }

    function onItemLeave() {
      const contentEl = unref(contentRef)

      trigger.value.includes('hover') &&
        contentEl?.focus({
          preventScroll: true,
        })
      currentTabId.value = null
    }

    function handleCurrentTabIdChange(id: string) {
      currentTabId.value = id
    }

    function handleBeforeShowTooltip() {
      emit('visible-change', true)
    }

    function handleShowTooltip(event?: Event) {
      isUsingKeyboard.value = event?.type === 'keydown'
      contentRef.value?.focus()
    }

    function handleBeforeHideTooltip() {
      emit('visible-change', false)
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave,
      handleClose,
    })

    provide(DROPDOWN_INSTANCE_INJECTION_KEY, {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, 'trigger'),
      hideOnClick: toRef(props, 'hideOnClick'),
    })

    const handlerMainButtonClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      t,
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef,
    }
  },
})
</script>
