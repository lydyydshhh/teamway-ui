import { withInstall } from '@teamway-ui/utils'
import Progress from './src/progress.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyProgress: SFCWithInstall<typeof Progress> = withInstall(Progress)
export default TyProgress

export * from './src/progress'
