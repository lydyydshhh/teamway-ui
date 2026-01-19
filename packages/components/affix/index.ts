import { withInstall } from '@teamway-ui/utils'
import Affix from './src/affix.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyAffix: SFCWithInstall<typeof Affix> = withInstall(Affix)
export default TyAffix

export * from './src/affix'
