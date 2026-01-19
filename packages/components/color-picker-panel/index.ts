import { withInstall } from '@teamway-ui/utils'
import ColorPickerPanel from './src/color-picker-panel.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyColorPickerPanel: SFCWithInstall<typeof ColorPickerPanel> =
  withInstall(ColorPickerPanel)
export default TyColorPickerPanel

export * from './src/color-picker-panel'
