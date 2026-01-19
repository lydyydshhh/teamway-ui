import { placements } from '@popperjs/core'
import { buildProps, isNumber } from '@teamway-ui/utils'
import { UPDATE_MODEL_EVENT } from '@teamway-ui/constants'

import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  ExtractPublicPropTypes,
  Ref,
} from 'vue'
import type Button from './button.vue'

export const sliderButtonProps = buildProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  vertical: Boolean,
  tooltipClass: String,
  placement: {
    type: String,
    values: placements,
    default: 'top',
  },
} as const)
export type SliderButtonProps = ExtractPropTypes<typeof sliderButtonProps>
export type SliderButtonPropsPublic = ExtractPublicPropTypes<
  typeof sliderButtonProps
>

export const sliderButtonEmits = {
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value),
}
export type SliderButtonEmits = typeof sliderButtonEmits

export type SliderButtonInstance = ComponentPublicInstance<typeof Button>

export type ButtonRefs = Record<
  'firstButton' | 'secondButton',
  Ref<SliderButtonInstance | undefined>
>

export interface SliderButtonInitData {
  hovering: boolean
  dragging: boolean
  isClick: boolean
  startX: number
  currentX: number
  startY: number
  currentY: number
  startPosition: number
  newPosition: number
  oldValue: number
}
