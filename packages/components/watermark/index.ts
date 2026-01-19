import { withInstall } from '@teamway-ui/utils'
import Watermark from './src/watermark.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyWatermark: SFCWithInstall<typeof Watermark> =
  withInstall(Watermark)
export default TyWatermark

export * from './src/watermark'
