import { withInstall } from '@teamway-ui/utils'
import Statistic from './src/statistic.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyStatistic: SFCWithInstall<typeof Statistic> =
  withInstall(Statistic)

export default TyStatistic
export * from './src/statistic'
