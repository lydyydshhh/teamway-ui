import { withInstall } from '@teamway-ui/utils'
import Slider from './src/slider.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TySlider: SFCWithInstall<typeof Slider> = withInstall(Slider)
export default TySlider

export * from './src/slider'
export * from './src/constants'
