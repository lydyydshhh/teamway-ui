import { withInstall } from '@element-plus/utils'
import ConfigProvider from './src/config-provider'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyConfigProvider: SFCWithInstall<typeof ConfigProvider> =
  withInstall(ConfigProvider)
export default TyConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
