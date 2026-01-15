import { withInstall } from '@element-plus/utils'
import InputNumber from './src/input-number.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyInputNumber: SFCWithInstall<typeof InputNumber> =
  withInstall(InputNumber)

export default TyInputNumber
export * from './src/input-number'
