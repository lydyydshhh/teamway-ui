import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyTimeline: SFCWithInstall<typeof Timeline> & {
  TimelineItem: typeof TimelineItem
} = withInstall(Timeline, {
  TimelineItem,
})
export default TyTimeline
export const TyTimelineItem: SFCWithInstall<typeof TimelineItem> =
  withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
export * from './src/tokens'
