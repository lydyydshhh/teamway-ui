import { withInstall } from '@teamway-ui/utils'
import Pagination from './src/pagination'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default TyPagination

export * from './src/pagination'
export * from './src/constants'
