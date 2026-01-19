import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyAvatar: SFCWithInstall<typeof Avatar> & {
  AvatarGroup: typeof AvatarGroup
} = withInstall(Avatar, {
  AvatarGroup,
})
export const TyAvatarGroup: SFCWithInstall<typeof AvatarGroup> =
  withNoopInstall(AvatarGroup)
export default TyAvatar

export * from './src/avatar'
export * from './src/constants'
export * from './src/avatar-group-props'
export type { AvatarInstance, AvatarGroupInstance } from './src/instance'
