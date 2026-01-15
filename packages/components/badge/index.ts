import { withInstall } from '@element-plus/utils'
import Badge from './src/badge.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyBadge: SFCWithInstall<typeof Badge> = withInstall(Badge)
export default TyBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
