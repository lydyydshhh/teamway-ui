import { withInstall } from '@element-plus/utils'
import Col from './src/col.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyCol: SFCWithInstall<typeof Col> = withInstall(Col)
export default TyCol

export * from './src/col'
