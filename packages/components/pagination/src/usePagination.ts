import { inject } from 'vue'
import { tyPaginationKey } from './constants'

export const usePagination = () => inject(tyPaginationKey, {})
