import { buildProps, definePropType } from '@teamway-ui/utils'
import { useEmptyValuesProps, useSizeProp } from '@teamway-ui/hooks'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type { Language } from '@teamway-ui/locale'
import type { ButtonConfigContext } from '@teamway-ui/components/button'
import type { CardConfigContext } from '@teamway-ui/components/card'
import type { DialogConfigContext } from '@teamway-ui/components/dialog'
import type { MessageConfigContext } from '@teamway-ui/components/message'
import type { LinkConfigContext } from '@teamway-ui/components/link'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ExperimentalFeatures = {
  // TO BE Defined
}

export const configProviderProps = buildProps({
  /**
   * @description Controlling if the users want a11y features
   */
  a11y: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Locale Object
   */
  locale: {
    type: definePropType<Language>(Object),
  },
  /**
   * @description global component size
   */
  size: useSizeProp,
  /**
   * @description button related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#button-attribute)
   */
  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },
  /**
   * @description card related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#card-attribute)
   */
  card: {
    type: definePropType<CardConfigContext>(Object),
  },
  /**
   * @description dialog related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#dialog-attribute)
   */
  dialog: {
    type: definePropType<DialogConfigContext>(Object),
  },
  /**
   * @description link related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#link-attribute)
   */
  link: {
    type: definePropType<LinkConfigContext>(Object),
  },
  /**
   * @description features at experimental stage to be added, all features are default to be set to false, [see the following table](https://element-plus.org/en-US/component/config-provider.html#experimental-features)                                                                            | ^[object]
   */
  experimentalFeatures: {
    type: definePropType<ExperimentalFeatures>(Object),
  },
  /**
   * @description Controls if we should handle keyboard navigation
   */
  keyboardNavigation: {
    type: Boolean,
    default: true,
  },
  /**
   * @description message related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#message-attribute)
   */
  message: {
    type: definePropType<MessageConfigContext>(Object),
  },
  /**
   * @description global Initial zIndex
   */
  zIndex: Number,
  /**
   * @description global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
   */
  namespace: {
    type: String,
    default: 'ty',
  },
  ...useEmptyValuesProps,
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
export type ConfigProviderPropsPublic = ExtractPublicPropTypes<
  typeof configProviderProps
>
