import { withInstall } from '@teamway-ui/utils'
import Alert from './src/alert.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyAlert: SFCWithInstall<typeof Alert> = withInstall(Alert)
export default TyAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'
