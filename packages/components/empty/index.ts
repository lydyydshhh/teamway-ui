import { withInstall } from '@element-plus/utils'
import Empty from './src/empty.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyEmpty: SFCWithInstall<typeof Empty> = withInstall(Empty)
export default TyEmpty

export * from './src/empty'
export type { EmptyInstance } from './src/instance'
