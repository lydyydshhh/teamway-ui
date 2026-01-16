import { withInstall } from '@element-plus/utils'
import DatePicker from './src/date-picker'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker)

export default TyDatePicker
export * from './src/props'
export type { DatePickerInstance } from './src/instance'
