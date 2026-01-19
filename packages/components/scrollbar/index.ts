import { withInstall } from '@teamway-ui/utils'
import Scrollbar from './src/scrollbar.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyScrollbar: SFCWithInstall<typeof Scrollbar> =
  withInstall(Scrollbar)
export default TyScrollbar

export * from './src/util'
export * from './src/scrollbar'
export * from './src/thumb'
export * from './src/constants'
