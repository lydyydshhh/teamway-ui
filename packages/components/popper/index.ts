import { withInstall } from '@teamway-ui/utils'
import Popper from './src/popper.vue'
import TyPopperArrow from './src/arrow.vue'
import TyPopperTrigger from './src/trigger.vue'
import TyPopperContent from './src/content.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export { TyPopperArrow, TyPopperTrigger, TyPopperContent }

export const TyPopper: SFCWithInstall<typeof Popper> = withInstall(Popper)
export default TyPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'
export * from './src/constants'

export type { Placement, Options } from '@popperjs/core'
