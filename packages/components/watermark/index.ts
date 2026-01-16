import { withInstall } from '@element-plus/utils'
import Watermark from './src/watermark.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyWatermark: SFCWithInstall<typeof Watermark> =
  withInstall(Watermark)
export default TyWatermark

export * from './src/watermark'
