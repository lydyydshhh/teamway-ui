import { withInstall, withInstallDirective } from '@element-plus/utils'
import Popover from './src/popover.vue'
import PopoverDirective, { VPopover } from './src/directive'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyPopoverDirective: SFCWithInstall<typeof PopoverDirective> =
  withInstallDirective(PopoverDirective, VPopover)

export const TyPopover: SFCWithInstall<typeof Popover> & {
  directive: typeof TyPopoverDirective
} = withInstall(Popover, {
  directive: TyPopoverDirective,
})
export default TyPopover

export * from './src/popover'
