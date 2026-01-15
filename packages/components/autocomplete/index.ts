import { withInstall } from '@element-plus/utils'
import Autocomplete from './src/autocomplete.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyAutocomplete: SFCWithInstall<typeof Autocomplete> =
  withInstall(Autocomplete)

export default TyAutocomplete

export * from './src/autocomplete'
