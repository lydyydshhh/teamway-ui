import { withInstall } from '@teamway-ui/utils'
import Icon from './src/icon.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default TyIcon

export * from './src/icon'
