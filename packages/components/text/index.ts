import { withInstall } from '@element-plus/utils'
import Text from './src/text.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyText: SFCWithInstall<typeof Text> = withInstall(Text)
export default TyText

export * from './src/text'
