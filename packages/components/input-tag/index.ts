import { withInstall } from '@element-plus/utils'
import InputTag from './src/input-tag.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyInputTag: SFCWithInstall<typeof InputTag> = withInstall(InputTag)
export default TyInputTag

export * from './src/input-tag'
export type { InputTagInstance } from './src/instance'
