import { withInstall } from '@teamway-ui/utils'
import Image from './src/image.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyImage: SFCWithInstall<typeof Image> = withInstall(Image)
export default TyImage

export * from './src/image'
