import { withInstall } from '@teamway-ui/utils'
import Countdown from './src/countdown.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCountdown: SFCWithInstall<typeof Countdown> =
  withInstall(Countdown)
export default TyCountdown

export * from './src/countdown'
