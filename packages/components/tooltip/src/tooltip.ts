import { buildProps } from '@teamway-ui/utils'
import { createModelToggleComposable } from '@teamway-ui/hooks'
import { popperArrowProps, popperProps } from '@teamway-ui/components/popper'
import { useTooltipContentProps } from './content'
import { useTooltipTriggerProps } from './trigger'

import type Tooltip from './tooltip.vue'
import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle,
} = createModelToggleComposable('visible' as const)

export const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
})

export const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  'before-show',
  'before-hide',
  'show',
  'hide',
  'open',
  'close',
]

export type TyTooltipProps = ExtractPropTypes<typeof useTooltipProps>
export type TyTooltipPropsPublic = ExtractPublicPropTypes<
  typeof useTooltipProps
>

export type TooltipInstance = InstanceType<typeof Tooltip> & unknown
