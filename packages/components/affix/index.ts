import { withInstall } from '@element-plus/utils'
import Affix from './src/affix.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyAffix: SFCWithInstall<typeof Affix> = withInstall(Affix)
export default TyAffix

export * from './src/affix'
