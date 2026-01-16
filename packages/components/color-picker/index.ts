import { withInstall } from '@element-plus/utils'
import ColorPicker from './src/color-picker.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyColorPicker: SFCWithInstall<typeof ColorPicker> =
  withInstall(ColorPicker)
export default TyColorPicker

export * from './src/color-picker'
