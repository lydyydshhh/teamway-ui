import { withInstall } from '@teamway-ui/utils'
import InputTag from './src/input-tag.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyInputTag: SFCWithInstall<typeof InputTag> = withInstall(InputTag)
export default TyInputTag

export * from './src/input-tag'
export type { InputTagInstance } from './src/instance'
