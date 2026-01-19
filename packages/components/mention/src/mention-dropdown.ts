import { buildProps, definePropType, isString } from '@teamway-ui/utils'

import type { MentionOption } from './types'

export const mentionDropdownProps = buildProps({
  options: {
    type: definePropType<MentionOption[]>(Array),
    default: () => [],
  },
  loading: Boolean,
  disabled: Boolean,
  contentId: String,
  ariaLabel: String,
})

export const mentionDropdownEmits = {
  select: (option: MentionOption) => isString(option.value),
}
