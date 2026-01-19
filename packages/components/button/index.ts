import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyButton: SFCWithInstall<typeof Button> & {
  ButtonGroup: typeof ButtonGroup
} = withInstall(Button, {
  ButtonGroup,
})
export const TyButtonGroup: SFCWithInstall<typeof ButtonGroup> =
  withNoopInstall(ButtonGroup)
export default TyButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
