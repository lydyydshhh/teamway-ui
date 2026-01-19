import { withInstall } from '@teamway-ui/utils'
import CascaderPanel from './src/index.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCascaderPanel: SFCWithInstall<typeof CascaderPanel> =
  withInstall(CascaderPanel)

export default TyCascaderPanel
export * from './src/types'
export * from './src/config'
export * from './src/instance'
