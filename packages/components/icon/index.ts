import { withInstall } from '@element-plus/utils'
import Icon from './src/icon.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default TyIcon

export * from './src/icon'
