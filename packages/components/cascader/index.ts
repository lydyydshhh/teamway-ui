import { withInstall } from '@teamway-ui/utils'
import Cascader from './src/cascader.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCascader: SFCWithInstall<typeof Cascader> = withInstall(Cascader)

export default TyCascader

export * from './src/cascader'
export * from './src/instances'
