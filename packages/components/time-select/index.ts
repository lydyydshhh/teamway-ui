import { withInstall } from '@element-plus/utils'
import TimeSelect from './src/time-select.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyTimeSelect: SFCWithInstall<typeof TimeSelect> =
  withInstall(TimeSelect)
export default TyTimeSelect

export * from './src/time-select'
