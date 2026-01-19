import { withInstall } from '@teamway-ui/utils'
import Result from './src/result.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyResult: SFCWithInstall<typeof Result> = withInstall(Result)

export default TyResult

export * from './src/result'
