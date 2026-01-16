import { withInstall } from '@element-plus/utils'
import ImageViewer from './src/image-viewer.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyImageViewer: SFCWithInstall<typeof ImageViewer> =
  withInstall(ImageViewer)
export default TyImageViewer

export * from './src/image-viewer'
