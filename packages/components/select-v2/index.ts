import { withInstall } from '@teamway-ui/utils'
import Select from './src/select.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TySelectV2: SFCWithInstall<typeof Select> = withInstall(Select)
export default TySelectV2

export * from './src/token'
