import { buildProps } from '@teamway-ui/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault('month'),
})

export type BasicMonthTableProps = ExtractPropTypes<typeof basicMonthTableProps>
export type BasicMonthTablePropsPublic = ExtractPublicPropTypes<
  typeof basicMonthTableProps
>
