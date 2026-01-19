import { withInstall } from '@teamway-ui/utils'
import ColorPicker from './src/color-picker.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyColorPicker: SFCWithInstall<typeof ColorPicker> =
  withInstall(ColorPicker)
export default TyColorPicker

export * from './src/color-picker'
