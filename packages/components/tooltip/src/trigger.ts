import { buildProps, definePropType } from '@teamway-ui/utils'
import { popperTriggerProps } from '@teamway-ui/components/popper'
import { EVENT_CODE } from '@teamway-ui/constants'

import type { Arrayable } from '@teamway-ui/utils'
import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  /**
   * @description whether Tooltip is disabled
   */
  disabled: Boolean,
  /**
   * @description How should the tooltip be triggered (to show), not valid in controlled mode
   */
  trigger: {
    type: definePropType<Arrayable<TooltipTriggerType>>([String, Array]),
    default: 'hover',
  },
  /**
   * @description When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of tooltip through the keyboard, not valid in controlled mode
   */
  triggerKeys: {
    type: definePropType<string[]>(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space],
  },
  /**
   * @description when triggering tooltips through hover, whether to focus the trigger element, which improves accessibility
   */
  focusOnTarget: Boolean,
} as const)

export type TyTooltipTriggerProps = ExtractPropTypes<
  typeof useTooltipTriggerProps
>

export type TyTooltipTriggerPropsPublic = ExtractPublicPropTypes<
  typeof useTooltipTriggerProps
>
