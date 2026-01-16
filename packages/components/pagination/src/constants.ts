import type { ComputedRef, InjectionKey, WritableComputedRef } from 'vue'

export interface TyPaginationContext {
  currentPage?: WritableComputedRef<number>
  pageCount?: ComputedRef<number>
  disabled?: ComputedRef<boolean>
  changeEvent?: (val: number) => void
  handleSizeChange?: (val: number) => void
}

export const tyPaginationKey: InjectionKey<TyPaginationContext> =
  Symbol('tyPaginationKey')
