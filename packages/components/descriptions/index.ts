import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Descriptions from './src/description.vue'
import DescriptionsItem from './src/description-item'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyDescriptions: SFCWithInstall<typeof Descriptions> & {
  DescriptionsItem: typeof DescriptionsItem
} = withInstall(Descriptions, {
  DescriptionsItem,
})

export const TyDescriptionsItem: SFCWithInstall<typeof DescriptionsItem> =
  withNoopInstall(DescriptionsItem)

export default TyDescriptions

export * from './src/description'
export * from './src/description-item'
