import { withInstall } from '@element-plus/utils'
import Result from './src/result.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyResult: SFCWithInstall<typeof Result> = withInstall(Result)

export default TyResult

export * from './src/result'
