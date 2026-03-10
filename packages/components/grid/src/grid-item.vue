<template>
  <div ref="domRef" :class="ns.b()" :style="style">
    <slot :overflow="overflow" />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onUnmounted, ref, toRefs, watchEffect } from 'vue'
import { useNamespace } from '@teamway-ui/hooks'
import { gridContextKey, gridDataCollectorKey } from './context'
import { useIndex } from './hooks/use-index'
import { useResponsiveState } from './hooks/use-responsive-state'
import { gridItemProps } from './types'
import { resolveItemData } from './utils'

defineOptions({
  name: 'TyGridItem',
})

const props = defineProps(gridItemProps)
const ns = useNamespace('grid-item')
const domRef = ref<HTMLDivElement>()

const { computedIndex } = useIndex({
  itemRef: domRef,
  selector: `.${ns.b()}`,
})

const gridContext = inject(gridContextKey, {
  overflow: false,
  displayIndexList: [],
  cols: 24,
  colGap: 0,
})

const gridDataCollector = inject(gridDataCollectorKey)
const visible = computed(() =>
  gridContext?.displayIndexList?.includes(computedIndex.value)
)

const { span: propSpan, offset: propOffset } = toRefs(props)
const rSpan = useResponsiveState(propSpan, 1)
const rOffset = useResponsiveState(propOffset, 0)

const itemData = computed(() =>
  resolveItemData(gridContext.cols, {
    ...props,
    span: rSpan.value,
    offset: rOffset.value,
  })
)

const offsetStyle = computed(() => {
  const { offset, span } = itemData.value
  const { colGap } = gridContext
  if (offset > 0) {
    const oneSpan = `(100% - ${colGap * (span - 1)}px) / ${span}`
    return {
      marginLeft: `calc((${oneSpan} * ${offset}) + ${colGap * offset}px)`,
    }
  }
  return {}
})

const columnStart = computed(() => {
  const { suffix, span } = itemData.value
  const { cols } = gridContext
  if (suffix) return `${cols - span + 1}`
  return `span ${span}`
})

const style = computed(() => {
  const { span } = itemData.value
  if (domRef.value) {
    return [
      {
        gridColumn: `${columnStart.value} / span ${span}`,
      },
      offsetStyle.value,
      !visible.value || span === 0 ? { display: 'none' } : {},
    ]
  }
  return []
})

watchEffect(() => {
  if (computedIndex.value !== -1) {
    gridDataCollector?.collectItemData(computedIndex.value, itemData.value)
  }
})

onUnmounted(() => {
  if (computedIndex.value !== -1) {
    gridDataCollector?.removeItemData(computedIndex.value)
  }
})

const overflow = computed(() => gridContext.overflow)
</script>
