import { withInstall } from '@element-plus/utils'
import Image from './src/image.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyImage: SFCWithInstall<typeof Image> = withInstall(Image)
export default TyImage

export * from './src/image'
