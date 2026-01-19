import { withInstall } from '@teamway-ui/utils'
import Link from './src/link.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyLink: SFCWithInstall<typeof Link> = withInstall(Link)
export default TyLink

export * from './src/link'
