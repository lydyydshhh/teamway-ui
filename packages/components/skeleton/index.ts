import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TySkeleton: SFCWithInstall<typeof Skeleton> & {
  SkeletonItem: typeof SkeletonItem
} = withInstall(Skeleton, {
  SkeletonItem,
})
export const TySkeletonItem: SFCWithInstall<typeof SkeletonItem> =
  withNoopInstall(SkeletonItem)
export default TySkeleton

export * from './src/skeleton'
export * from './src/skeleton-item'
