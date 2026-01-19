import { withInstall } from '@teamway-ui/utils'
import Tree from './src/tree.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTree: SFCWithInstall<typeof Tree> = withInstall(Tree)

export default TyTree

export * from './src/tree.type'
export * from './src/instance'
export * from './src/tokens'
export * from './src/tree'
