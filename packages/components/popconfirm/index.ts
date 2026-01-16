import { withInstall } from '@element-plus/utils'
import Popconfirm from './src/popconfirm.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyPopconfirm: SFCWithInstall<typeof Popconfirm> =
  withInstall(Popconfirm)
export default TyPopconfirm

export * from './src/popconfirm'
