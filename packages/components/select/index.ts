import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TySelect: SFCWithInstall<typeof Select> & {
  Option: typeof Option
  OptionGroup: typeof OptionGroup
} = withInstall(Select, {
  Option,
  OptionGroup,
})
export default TySelect
export const TyOption: SFCWithInstall<typeof Option> = withNoopInstall(Option)
export const TyOptionGroup: SFCWithInstall<typeof OptionGroup> =
  withNoopInstall(OptionGroup)

export * from './src/token'
export * from './src/select'

export type {
  SelectContext,
  OptionPublicInstance as SelectOptionProxy,
  OptionBasic,
} from './src/type'
