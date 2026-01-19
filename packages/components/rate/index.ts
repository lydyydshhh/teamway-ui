import { withInstall } from '@teamway-ui/utils'
import Rate from './src/rate.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyRate: SFCWithInstall<typeof Rate> = withInstall(Rate)
export default TyRate

export * from './src/rate'
