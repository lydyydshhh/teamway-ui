import { withInstall } from '@teamway-ui/utils'
import Popconfirm from './src/popconfirm.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyPopconfirm: SFCWithInstall<typeof Popconfirm> =
  withInstall(Popconfirm)
export default TyPopconfirm

export * from './src/popconfirm'
