<template>
  <ty-teleport :to="appendTo">
    <div :class="kls" v-bind="$attrs">
      <ty-tour-mask
        :visible="mergedShowMask"
        :fill="mergedMaskStyle?.color"
        :style="mergedMaskStyle?.style"
        :pos="pos"
        :z-index="mergedZIndex"
        :target-area-clickable="targetAreaClickable"
      />
      <ty-tour-content
        v-if="modelValue"
        :key="current"
        :reference="triggerTarget"
        :placement="mergedPlacement"
        :show-arrow="mergedShowArrow"
        :z-index="mergedZIndex"
        :style="mergedContentStyle"
        @close="onEscClose"
      >
        <ty-tour-steps :current="current" @update-total="onUpdateTotal">
          <slot />
        </ty-tour-steps>
      </ty-tour-content>
    </div>
  </ty-teleport>
  <!-- just for IDE -->
  <slot v-if="false" name="indicators" :current="current + 1" :total="total" />
</template>

<script lang="ts" setup>
import { computed, provide, ref, toRef, useSlots, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { useNamespace, useZIndex } from '@teamway-ui/hooks'
import { isBoolean } from '@teamway-ui/utils'
import TyTeleport from '@teamway-ui/components/teleport'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@teamway-ui/constants'
import TyTourMask from './mask.vue'
import TyTourContent from './content.vue'
import TyTourSteps from './steps'
import { tourEmits, tourProps } from './tour'
import { tourKey, useTarget } from './helper'

import type { TourStepProps } from './step'

defineOptions({
  name: 'TyTour',
  inheritAttrs: false,
})

const props = defineProps(tourProps)
const emit = defineEmits(tourEmits)

const ns = useNamespace('tour')
const total = ref(0)
const currentStep = ref<TourStepProps>()

const current = useVModel(props, 'current', emit, {
  passive: true,
})

const currentTarget = computed(() => currentStep.value?.target)

const kls = computed(() => [
  ns.b(),
  mergedType.value === 'primary' ? ns.m('primary') : '',
])

const mergedPlacement = computed(
  () => currentStep.value?.placement || props.placement
)

const mergedContentStyle = computed(
  () => currentStep.value?.contentStyle ?? props.contentStyle
)

const mergedMask = computed(() => currentStep.value?.mask ?? props.mask)
const mergedShowMask = computed(() => !!mergedMask.value && props.modelValue)
const mergedMaskStyle = computed(() =>
  isBoolean(mergedMask.value) ? undefined : mergedMask.value
)

const mergedShowArrow = computed(
  () =>
    !!currentTarget.value && (currentStep.value?.showArrow ?? props.showArrow)
)

const mergedScrollIntoViewOptions = computed(
  () => currentStep.value?.scrollIntoViewOptions ?? props.scrollIntoViewOptions
)
const mergedType = computed(() => currentStep.value?.type ?? props.type)

const { nextZIndex } = useZIndex()
const nowZIndex = nextZIndex()
const mergedZIndex = computed(() => props.zIndex ?? nowZIndex)

const { mergedPosInfo: pos, triggerTarget } = useTarget(
  currentTarget,
  toRef(props, 'modelValue'),
  toRef(props, 'gap'),
  mergedMask,
  mergedScrollIntoViewOptions
)

watch(
  () => props.modelValue,
  (val) => {
    if (!val) {
      current.value = 0
    }
  }
)

const onEscClose = () => {
  if (props.closeOnPressEscape) {
    emit(UPDATE_MODEL_EVENT, false)
    emit('close', current.value)
  }
}

const onUpdateTotal = (val: number) => {
  total.value = val
}

const slots = useSlots()

provide(tourKey, {
  currentStep,
  current,
  total,
  showClose: toRef(props, 'showClose'),
  closeIcon: toRef(props, 'closeIcon'),
  mergedType,
  ns,
  slots,
  updateModelValue(modelValue) {
    emit(UPDATE_MODEL_EVENT, modelValue)
  },
  onClose() {
    emit('close', current.value)
  },
  onFinish() {
    emit('finish')
  },
  onChange() {
    emit(CHANGE_EVENT, current.value)
  },
})
</script>
