import { withInstall } from '@teamway-ui/utils'
import Col from './src/col.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCol: SFCWithInstall<typeof Col> = withInstall(Col)
export default TyCol

export * from './src/col'
