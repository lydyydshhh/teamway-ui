import { withInstall } from '@teamway-ui/utils'
import Input from './src/input.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default TyInput

export * from './src/input'
export type { InputInstance } from './src/instance'
