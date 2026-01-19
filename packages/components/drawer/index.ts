import { withInstall } from '@teamway-ui/utils'
import Drawer from './src/drawer.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyDrawer: SFCWithInstall<typeof Drawer> = withInstall(Drawer)
export default TyDrawer

export * from './src/drawer'
