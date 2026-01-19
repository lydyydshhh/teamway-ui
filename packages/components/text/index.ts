import { withInstall } from '@teamway-ui/utils'
import Text from './src/text.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyText: SFCWithInstall<typeof Text> = withInstall(Text)
export default TyText

export * from './src/text'
