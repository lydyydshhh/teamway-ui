import { withInstall } from '@element-plus/utils'
import Input from './src/input.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default TyInput

export * from './src/input'
export type { InputInstance } from './src/instance'
