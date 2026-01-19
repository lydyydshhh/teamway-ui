import { withInstall } from '@teamway-ui/utils'
import DatePicker from './src/date-picker'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker)

export default TyDatePicker
export * from './src/props'
export type { DatePickerInstance } from './src/instance'
