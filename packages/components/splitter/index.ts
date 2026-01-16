import { withInstall, withNoopInstall } from '@element-plus/utils'
import Splitter from './src/splitter.vue'
import SplitPanel from './src/split-panel.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TySplitter: SFCWithInstall<typeof Splitter> & {
  SplitPanel: typeof SplitPanel
} = withInstall(Splitter, {
  SplitPanel,
})
export default TySplitter

export const TySplitterPanel: SFCWithInstall<typeof SplitPanel> =
  withNoopInstall(SplitPanel)

export * from './src/splitter'
export * from './src/split-panel'
