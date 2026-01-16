import { withInstall } from '@element-plus/utils'
import Pagination from './src/pagination'

import type { SFCWithInstall } from '@element-plus/utils'

export const TyPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default TyPagination

export * from './src/pagination'
export * from './src/constants'
