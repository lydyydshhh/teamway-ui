import { withInstall } from '@teamway-ui/utils'
import Teleport from './src/teleport.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default TyTeleport

export * from './src/teleport'
