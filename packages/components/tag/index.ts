import { withInstall } from '@teamway-ui/utils'
import Tag from './src/tag.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTag: SFCWithInstall<typeof Tag> = withInstall(Tag)
export default TyTag

export * from './src/tag'
