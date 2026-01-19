import { withInstall } from '@teamway-ui/utils'
import Upload from './src/upload.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyUpload: SFCWithInstall<typeof Upload> = withInstall(Upload)
export default TyUpload

export * from './src/upload'
export * from './src/upload-content'
export * from './src/upload-list'
export * from './src/upload-dragger'
export * from './src/constants'
