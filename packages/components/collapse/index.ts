import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCollapse: SFCWithInstall<typeof Collapse> & {
  CollapseItem: typeof CollapseItem
} = withInstall(Collapse, {
  CollapseItem,
})
export default TyCollapse
export const TyCollapseItem: SFCWithInstall<typeof CollapseItem> =
  withNoopInstall(CollapseItem)

export * from './src/collapse'
export * from './src/collapse-item'
export * from './src/constants'
export type { CollapseInstance, CollapseItemInstance } from './src/instance'
