import { TyInfiniteScroll } from '@teamway-ui/components/infinite-scroll'
import { TyLoading } from '@teamway-ui/components/loading'
import { TyMessage } from '@teamway-ui/components/message'
import { TyMessageBox } from '@teamway-ui/components/message-box'
import { TyNotification } from '@teamway-ui/components/notification'
import { TyPopoverDirective } from '@teamway-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  TyInfiniteScroll,
  TyLoading,
  TyMessage,
  TyMessageBox,
  TyNotification,
  TyPopoverDirective,
] as Plugin[]
