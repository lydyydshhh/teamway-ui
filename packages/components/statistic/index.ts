import { withInstall } from '@element-plus/utils'
import Statistic from './src/statistic.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyStatistic: SFCWithInstall<typeof Statistic> =
  withInstall(Statistic)

export default TyStatistic
export * from './src/statistic'
