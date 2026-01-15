import { withInstall } from '@element-plus/utils'
import Backtop from './src/backtop.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyBacktop: SFCWithInstall<typeof Backtop> = withInstall(Backtop)
export default TyBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'
