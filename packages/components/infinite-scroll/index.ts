// TODO: remove the directive in 3.0
import InfiniteScroll from './src'

import type { App } from 'vue'
import type { SFCWithInstall } from '@teamway-ui/utils'

const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

_InfiniteScroll.install = (app: App) => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll
export const TyInfiniteScroll = _InfiniteScroll
