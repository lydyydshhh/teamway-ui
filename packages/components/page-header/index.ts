import { withInstall } from '@element-plus/utils'
import PageHeader from './src/page-header.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyPageHeader: SFCWithInstall<typeof PageHeader> =
  withInstall(PageHeader)
export default TyPageHeader

export * from './src/page-header'
