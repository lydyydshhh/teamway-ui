import { withInstall } from '@element-plus/utils'
import Rate from './src/rate.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyRate: SFCWithInstall<typeof Rate> = withInstall(Rate)
export default TyRate

export * from './src/rate'
