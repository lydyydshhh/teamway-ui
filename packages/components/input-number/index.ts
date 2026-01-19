import { withInstall } from '@teamway-ui/utils'
import InputNumber from './src/input-number.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyInputNumber: SFCWithInstall<typeof InputNumber> =
  withInstall(InputNumber)

export default TyInputNumber
export * from './src/input-number'
