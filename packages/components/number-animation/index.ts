import { withInstall } from '@teamway-ui/utils'
import NumberAnimation from './src/number-animation.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyNumberAnimation: SFCWithInstall<typeof NumberAnimation> =
  withInstall(NumberAnimation)

export default TyNumberAnimation
export * from './src/number-animation'
