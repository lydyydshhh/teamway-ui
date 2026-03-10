import type { InjectionKey } from 'vue'
import type { GridItemData } from './types'

export type GridContext = Readonly<{
  overflow: boolean
  displayIndexList: number[]
  cols: number
  colGap: number
}>

export const gridContextKey: InjectionKey<GridContext> =
  Symbol('gridContextKey')

export type GridDataCollector = Readonly<{
  collectItemData: (index: number, itemData: GridItemData) => void
  removeItemData: (index: number) => void
}>

export const gridDataCollectorKey: InjectionKey<GridDataCollector> = Symbol(
  'gridDataCollectorKey'
)
