import { withInstall } from '@teamway-ui/utils'
import Tooltip from './src/tooltip.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip)
export * from './src/tooltip'
export * from './src/trigger'
export * from './src/content'
export * from './src/constants'
export default TyTooltip
