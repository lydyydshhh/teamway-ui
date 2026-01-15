import { withInstall, withNoopInstall } from '@element-plus/utils'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyTabs: SFCWithInstall<typeof Tabs> & {
  TabPane: typeof TabPane
} = withInstall(Tabs, {
  TabPane,
})
export const TyTabPane: SFCWithInstall<typeof TabPane> =
  withNoopInstall(TabPane)
export default TyTabs

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
export * from './src/constants'
