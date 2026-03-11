import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Grid from './src/grid.vue'
import GridItem from './src/grid-item.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyGrid: SFCWithInstall<typeof Grid> & {
  GridItem: typeof GridItem
} = withInstall(Grid, {
  GridItem,
})

export const TyGridItem: SFCWithInstall<typeof GridItem> =
  withNoopInstall(GridItem)

export default TyGrid
export * from './src/types'
