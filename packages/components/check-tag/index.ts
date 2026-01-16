import { withInstall } from '@element-plus/utils'
import CheckTag from './src/check-tag.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyCheckTag: SFCWithInstall<typeof CheckTag> = withInstall(CheckTag)
export default TyCheckTag

export * from './src/check-tag'
