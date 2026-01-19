import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCheckbox: SFCWithInstall<typeof Checkbox> & {
  CheckboxButton: typeof CheckboxButton
  CheckboxGroup: typeof CheckboxGroup
} = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default TyCheckbox

export const TyCheckboxButton: SFCWithInstall<typeof CheckboxButton> =
  withNoopInstall(CheckboxButton)
export const TyCheckboxGroup: SFCWithInstall<typeof CheckboxGroup> =
  withNoopInstall(CheckboxGroup)

export * from './src/checkbox-group'
export * from './src/checkbox'
export * from './src/constants'
