import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyAnchor: SFCWithInstall<typeof Anchor> & {
  AnchorLink: typeof AnchorLink
} = withInstall(Anchor, {
  AnchorLink,
})
export const TyAnchorLink: SFCWithInstall<typeof AnchorLink> =
  withNoopInstall(AnchorLink)
export default TyAnchor

export * from './src/anchor'
