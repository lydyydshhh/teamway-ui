import { withInstall } from '@element-plus/utils'
import Divider from './src/divider.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default TyDivider

export * from './src/divider'
