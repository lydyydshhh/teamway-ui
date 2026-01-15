import { TyInfiniteScroll } from '@element-plus/components/infinite-scroll'
import { TyLoading } from '@element-plus/components/loading'
import { TyMessage } from '@element-plus/components/message'
import { TyMessageBox } from '@element-plus/components/message-box'
import { TyNotification } from '@element-plus/components/notification'
import { TyPopoverDirective } from '@element-plus/components/popover'

import type { Plugin } from 'vue'

export default [
  TyInfiniteScroll,
  TyLoading,
  TyMessage,
  TyMessageBox,
  TyNotification,
  TyPopoverDirective,
] as Plugin[]
