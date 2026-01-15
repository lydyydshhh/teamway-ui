import { withInstall } from '@element-plus/utils'
import Drawer from './src/drawer.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyDrawer: SFCWithInstall<typeof Drawer> = withInstall(Drawer)
export default TyDrawer

export * from './src/drawer'
