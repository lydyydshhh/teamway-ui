import { componentSizeMap } from '@teamway-ui/constants'

import type { ComponentSize } from '@teamway-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
