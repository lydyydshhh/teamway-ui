import { withInstall } from '@teamway-ui/utils'
import TreeSelect from './src/tree-select.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTreeSelect: SFCWithInstall<typeof TreeSelect> =
  withInstall(TreeSelect)

export default TyTreeSelect

export type { TreeSelectInstance } from './src/instance'
