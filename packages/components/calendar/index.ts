import { withInstall } from '@teamway-ui/utils'
import Calendar from './src/calendar.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCalendar: SFCWithInstall<typeof Calendar> = withInstall(Calendar)
export default TyCalendar

export * from './src/calendar'
export type {
  CalendarDateTableInstance,
  DateTableInstance,
  CalendarInstance,
} from './src/instance'
