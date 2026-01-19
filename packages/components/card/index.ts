import { withInstall } from '@teamway-ui/utils'
import Card from './src/card.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCard: SFCWithInstall<typeof Card> = withInstall(Card)
export default TyCard

export * from './src/card'
export type { CardInstance } from './src/instance'
