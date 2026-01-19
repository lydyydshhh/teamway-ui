import { withInstall } from '@teamway-ui/utils'
import Backtop from './src/backtop.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyBacktop: SFCWithInstall<typeof Backtop> = withInstall(Backtop)
export default TyBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'
