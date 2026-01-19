import { withInstall } from '@teamway-ui/utils'
import ImageViewer from './src/image-viewer.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyImageViewer: SFCWithInstall<typeof ImageViewer> =
  withInstall(ImageViewer)
export default TyImageViewer

export * from './src/image-viewer'
