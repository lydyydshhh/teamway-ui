import { withInstall } from '@element-plus/utils'
import Link from './src/link.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyLink: SFCWithInstall<typeof Link> = withInstall(Link)
export default TyLink

export * from './src/link'
