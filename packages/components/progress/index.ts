import { withInstall } from '@element-plus/utils'
import Progress from './src/progress.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyProgress: SFCWithInstall<typeof Progress> = withInstall(Progress)
export default TyProgress

export * from './src/progress'
