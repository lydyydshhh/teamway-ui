import { withInstall } from '@teamway-ui/utils'
import Dialog from './src/dialog.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyDialog: SFCWithInstall<typeof Dialog> = withInstall(Dialog)
export default TyDialog

export * from './src/use-dialog'
export * from './src/dialog'
export * from './src/constants'
