import { withInstall } from '@teamway-ui/utils'
import TimeSelect from './src/time-select.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTimeSelect: SFCWithInstall<typeof TimeSelect> =
  withInstall(TimeSelect)
export default TyTimeSelect

export * from './src/time-select'
