<template>
  <ty-tooltip
    ref="tooltipRef"
    trigger="click"
    :effect="effect"
    v-bind="$attrs"
    :virtual-triggering="virtualTriggering"
    :virtual-ref="virtualRef"
    :popper-class="`${ns.namespace.value}-popover`"
    :popper-style="style"
    :teleported="teleported"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
    :persistent="persistent"
    loop
    @show="showPopper"
  >
    <template #content>
      <div ref="rootRef" tabindex="-1" :class="ns.b()">
        <div :class="ns.e('main')">
          <ty-icon
            v-if="!hideIcon && icon"
            :class="ns.e('icon')"
            :style="{ color: iconColor }"
          >
            <component :is="icon" />
          </ty-icon>
          {{ title }}
        </div>
        <div :class="ns.e('action')">
          <slot name="actions" :confirm="confirm" :cancel="cancel">
            <ty-button
              size="small"
              :type="cancelButtonType === 'text' ? '' : cancelButtonType"
              :text="cancelButtonType === 'text'"
              @click="cancel"
            >
              {{ finalCancelButtonText }}
            </ty-button>
            <ty-button
              size="small"
              :type="confirmButtonType === 'text' ? '' : confirmButtonType"
              :text="confirmButtonType === 'text'"
              @click="confirm"
            >
              {{ finalConfirmButtonText }}
            </ty-button>
          </slot>
        </div>
      </div>
    </template>
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>
  </ty-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import TyButton from '@teamway-ui/components/button'
import TyIcon from '@teamway-ui/components/icon'
import TyTooltip from '@teamway-ui/components/tooltip'
import { useLocale, useNamespace } from '@teamway-ui/hooks'
import { addUnit } from '@teamway-ui/utils'
import { popconfirmEmits, popconfirmProps } from './popconfirm'

import type { TooltipInstance } from '@teamway-ui/components/tooltip'

defineOptions({
  name: 'TyPopconfirm',
})

const props = defineProps(popconfirmProps)
const emit = defineEmits(popconfirmEmits)

const { t } = useLocale()
const ns = useNamespace('popconfirm')
const tooltipRef = ref<TooltipInstance>()
const rootRef = ref<HTMLElement>()

const popperRef = computed(() => {
  return unref(tooltipRef)?.popperRef
})

const showPopper = () => {
  rootRef.value?.focus?.()
}

const hidePopper = () => {
  tooltipRef.value?.onClose?.()
}

const style = computed(() => {
  return {
    width: addUnit(props.width),
  }
})

const confirm = (e: MouseEvent) => {
  emit('confirm', e)
  hidePopper()
}
const cancel = (e: MouseEvent) => {
  emit('cancel', e)
  hidePopper()
}

const finalConfirmButtonText = computed(
  () => props.confirmButtonText || t('el.popconfirm.confirmButtonText')
)
const finalCancelButtonText = computed(
  () => props.cancelButtonText || t('el.popconfirm.cancelButtonText')
)

defineExpose({
  popperRef,
  hide: hidePopper,
})
</script>
