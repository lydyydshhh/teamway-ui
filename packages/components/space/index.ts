import { withInstall } from '@element-plus/utils'
import Space from './src/space'

import type { SFCWithInstall } from '@element-plus/utils'

export const TySpace: SFCWithInstall<typeof Space> = withInstall(Space)
export default TySpace

export * from './src/space'
export * from './src/item'
export * from './src/use-space'
