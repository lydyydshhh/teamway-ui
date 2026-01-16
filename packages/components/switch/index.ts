import { withInstall } from '@element-plus/utils'
import Switch from './src/switch.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TySwitch: SFCWithInstall<typeof Switch> = withInstall(Switch)
export default TySwitch

export * from './src/switch'
