import { withInstall } from '@teamway-ui/utils'
import CheckTag from './src/check-tag.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCheckTag: SFCWithInstall<typeof CheckTag> = withInstall(CheckTag)
export default TyCheckTag

export * from './src/check-tag'
