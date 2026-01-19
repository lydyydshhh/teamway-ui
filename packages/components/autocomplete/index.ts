import { withInstall } from '@teamway-ui/utils'
import Autocomplete from './src/autocomplete.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyAutocomplete: SFCWithInstall<typeof Autocomplete> =
  withInstall(Autocomplete)

export default TyAutocomplete

export * from './src/autocomplete'
