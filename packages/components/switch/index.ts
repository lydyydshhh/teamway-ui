import { withInstall } from '@teamway-ui/utils'
import Switch from './src/switch.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TySwitch: SFCWithInstall<typeof Switch> = withInstall(Switch)
export default TySwitch

export * from './src/switch'
