import { withInstall } from '@element-plus/utils'
import Tag from './src/tag.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyTag: SFCWithInstall<typeof Tag> = withInstall(Tag)
export default TyTag

export * from './src/tag'
