import { withInstall } from '@teamway-ui/utils'
import Transfer from './src/transfer.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTransfer: SFCWithInstall<typeof Transfer> = withInstall(Transfer)
export default TyTransfer

export * from './src/transfer'
