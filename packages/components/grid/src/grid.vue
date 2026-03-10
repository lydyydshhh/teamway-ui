<template>
  <div :class="ns.b()" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, toRefs, watchEffect } from 'vue'
import { useNamespace } from '@teamway-ui/hooks'
import { gridContextKey, gridDataCollectorKey } from './context'
import { useResponsiveState } from './hooks/use-responsive-state'
import { gridProps } from './types'
import { setItemVisible } from './utils'

import type { GridItemData } from './types'

defineOptions({
  name: 'TyGrid',
})

const props = defineProps(gridProps)
const {
  cols: propCols,
  rowGap: propRowGap,
  colGap: propColGap,
  collapsedRows,
  collapsed,
} = toRefs(props)

const responsiveCols = useResponsiveState(propCols, 24)
const responsiveColGap = useResponsiveState(propColGap, 0)
const responsiveRowGap = useResponsiveState(propRowGap, 0)
const ns = useNamespace('grid')

const style = computed(() => [
  {
    gap: `${responsiveRowGap.value}px ${responsiveColGap.value}px`,
    gridTemplateColumns: `repeat(${responsiveCols.value}, minmax(0px, 1fr))`,
  },
])

const itemDataMap = reactive<Map<number, GridItemData>>(new Map())
const itemDataList = computed(() => {
  const list: GridItemData[] = []
  for (const [index, itemData] of itemDataMap.entries()) {
    list[index] = itemData
  }
  return list
})

const gridContext = reactive<{
  overflow: boolean
  displayIndexList: number[]
  cols: number
  colGap: number
}>({
  overflow: false,
  displayIndexList: [],
  cols: responsiveCols.value,
  colGap: responsiveColGap.value,
})

watchEffect(() => {
  gridContext.cols = responsiveCols.value
  gridContext.colGap = responsiveColGap.value
})

watchEffect(() => {
  const displayInfo = setItemVisible({
    cols: responsiveCols.value,
    collapsed: collapsed.value,
    collapsedRows: collapsedRows.value,
    itemDataList: itemDataList.value,
  })
  gridContext.overflow = displayInfo.overflow
  gridContext.displayIndexList = displayInfo.displayIndexList
})

provide(gridContextKey, gridContext)
provide(gridDataCollectorKey, {
  collectItemData(index, itemData) {
    itemDataMap.set(index, itemData)
  },
  removeItemData(index) {
    itemDataMap.delete(index)
  },
})
</script>
