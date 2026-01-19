import { withInstall } from '@teamway-ui/utils'
import Mention from './src/mention.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyMention: SFCWithInstall<typeof Mention> = withInstall(Mention)
export default TyMention

export * from './src/mention'
