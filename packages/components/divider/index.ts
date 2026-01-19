import { withInstall } from '@teamway-ui/utils'
import Divider from './src/divider.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default TyDivider

export * from './src/divider'
