import { buildProps } from '@teamway-ui/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type NumberAnimation from './number-animation.vue'

export const numberAnimationProps = buildProps({
  /**
   * @description 目标值
   */
  to: {
    type: Number,
    default: 0,
  },
  /**
   * @description 精度，保留小数点后几位
   */
  precision: {
    type: Number,
    default: 0,
  },
  /**
   * @description 数值动画起始值
   */
  from: {
    type: Number,
    default: 0,
  },
  /**
   * @description 是否开始动画
   */
  active: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 动画持续时间
   */
  duration: {
    type: Number,
    default: 3000,
  },
  /**
   * @description 是否显示分隔符
   */
  showSeparator: Boolean,
} as const)

export const numberAnimationEmits = {
  finish: () => true,
}

export type NumberAnimationProps = ExtractPropTypes<typeof numberAnimationProps>
export type NumberAnimationPropsPublic = ExtractPublicPropTypes<
  typeof numberAnimationProps
>
export type NumberAnimationEmits = typeof numberAnimationEmits

export type NumberAnimationInstance = InstanceType<typeof NumberAnimation> &
  unknown
