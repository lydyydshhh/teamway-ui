import { withInstall } from '@teamway-ui/utils'
import PageHeader from './src/page-header.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyPageHeader: SFCWithInstall<typeof PageHeader> =
  withInstall(PageHeader)
export default TyPageHeader

export * from './src/page-header'
