import { withInstall } from '@element-plus/utils'
import Mention from './src/mention.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyMention: SFCWithInstall<typeof Mention> = withInstall(Mention)
export default TyMention

export * from './src/mention'
