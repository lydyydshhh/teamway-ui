import { withInstall } from '@element-plus/utils'
import Transfer from './src/transfer.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyTransfer: SFCWithInstall<typeof Transfer> = withInstall(Transfer)
export default TyTransfer

export * from './src/transfer'
