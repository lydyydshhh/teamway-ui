import { withInstall } from '@teamway-ui/utils'
import Badge from './src/badge.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyBadge: SFCWithInstall<typeof Badge> = withInstall(Badge)
export default TyBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
