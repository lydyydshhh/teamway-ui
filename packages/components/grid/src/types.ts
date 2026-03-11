import {
  buildProps,
  definePropType,
  isNumber,
  isObject,
} from '@teamway-ui/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type Grid from './grid.vue'
import type GridItem from './grid-item.vue'

export interface ResponsiveValue {
  /**
   * @description `≥1920px` 响应式配置
   */
  xl?: number
  /**
   * @description `≥1200px` 响应式配置
   */
  lg?: number
  /**
   * @description `≥992px` 响应式配置
   */
  md?: number
  /**
   * @description `≥768px` 响应式配置
   */
  sm?: number
  /**
   * @description `<768px` 响应式配置
   */
  xs?: number
}

const responsiveValueValidator = (val: unknown) => {
  if (!isObject(val)) return false
  const keys = ['xl', 'lg', 'md', 'sm', 'xs']
  return Object.entries(val).every(
    ([key, value]) => keys.includes(key) && isNumber(value)
  )
}

export const gridProps = buildProps({
  /**
   * @description 每一行展示的列数
   */
  cols: {
    type: definePropType<number | ResponsiveValue>([Number, Object]),
    default: 24,
    validator: (val: number | ResponsiveValue) =>
      isNumber(val) || responsiveValueValidator(val),
  },
  /**
   * @description 行与行之间的间距
   */
  rowGap: {
    type: definePropType<number | ResponsiveValue>([Number, Object]),
    default: 0,
    validator: (val: number | ResponsiveValue) =>
      isNumber(val) || responsiveValueValidator(val),
  },
  /**
   * @description 列与列之间的间距
   */
  colGap: {
    type: definePropType<number | ResponsiveValue>([Number, Object]),
    default: 0,
    validator: (val: number | ResponsiveValue) =>
      isNumber(val) || responsiveValueValidator(val),
  },
  /**
   * @description 是否折叠
   */
  collapsed: Boolean,
  /**
   * @description 折叠时显示的行数
   */
  collapsedRows: {
    type: Number,
    default: 1,
  },
} as const)

export const gridItemProps = buildProps({
  /**
   * @description 跨越的格数
   */
  span: {
    type: definePropType<number | ResponsiveValue>([Number, Object]),
    default: 1,
    validator: (val: number | ResponsiveValue) =>
      isNumber(val) || responsiveValueValidator(val),
  },
  /**
   * @description 左侧的间隔格数
   */
  offset: {
    type: definePropType<number | ResponsiveValue>([Number, Object]),
    default: 0,
    validator: (val: number | ResponsiveValue) =>
      isNumber(val) || responsiveValueValidator(val),
  },
  /**
   * @description 是否是后缀元素
   */
  suffix: Boolean,
} as const)

export type GridProps = ExtractPropTypes<typeof gridProps>
export type GridPropsPublic = ExtractPublicPropTypes<typeof gridProps>
export type GridItemProps = ExtractPropTypes<typeof gridItemProps>
export type GridItemPropsPublic = ExtractPublicPropTypes<typeof gridItemProps>

export interface GridItemData {
  span: number
  offset: number
  suffix?: boolean
}

export type TyGridInstance = InstanceType<typeof Grid> & unknown
export type TyGridItemInstance = InstanceType<typeof GridItem> & unknown
