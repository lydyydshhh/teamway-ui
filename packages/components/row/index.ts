import { withInstall } from '@teamway-ui/utils'
import Row from './src/row.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyRow: SFCWithInstall<typeof Row> = withInstall(Row)
export default TyRow

export * from './src/row'
export * from './src/constants'
