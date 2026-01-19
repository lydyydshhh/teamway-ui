import { buildProps, iconPropType } from '@teamway-ui/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const breadcrumbProps = buildProps({
  /**
   * @description separator character
   */
  separator: {
    type: String,
    default: '/',
  },
  /**
   * @description icon component of icon separator
   */
  separatorIcon: {
    type: iconPropType,
  },
} as const)
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
export type BreadcrumbPropsPublic = ExtractPublicPropTypes<
  typeof breadcrumbProps
>
