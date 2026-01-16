import { withInstall } from '@element-plus/utils'
import Teleport from './src/teleport.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default TyTeleport

export * from './src/teleport'
