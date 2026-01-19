import { withInstall } from '@teamway-ui/utils'
import CollapseTransition from './src/collapse-transition.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition)

export default TyCollapseTransition
