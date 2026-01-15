import { withInstall } from '@element-plus/utils'
import Scrollbar from './src/scrollbar.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyScrollbar: SFCWithInstall<typeof Scrollbar> =
  withInstall(Scrollbar)
export default TyScrollbar

export * from './src/util'
export * from './src/scrollbar'
export * from './src/thumb'
export * from './src/constants'
