import type { GridItemData } from '../types'

export function resolveItemData(
  cols: number,
  props: GridItemData & { suffix?: boolean }
): GridItemData {
  const originSpan = props.span ?? 1
  const originOffset = props.offset ?? 0
  const offset = Math.min(originOffset, cols)
  const span = Math.min(
    offset > 0 ? originSpan + originOffset : originSpan,
    cols
  )
  return {
    span,
    offset,
    suffix: 'suffix' in props ? props.suffix !== false : false,
  }
}

export function setItemVisible({
  cols,
  collapsed,
  collapsedRows,
  itemDataList,
}: {
  cols: number
  collapsed: boolean
  collapsedRows: number
  itemDataList: GridItemData[]
}) {
  let overflow = false
  let displayIndexList: number[] = []

  const isOverflow = (span: number) => Math.ceil(span / cols) > collapsedRows

  if (collapsed) {
    let spanSum = 0

    for (const [i, element] of itemDataList.entries()) {
      if (element?.suffix) {
        spanSum += element.span
        displayIndexList.push(i)
      }
    }

    if (!isOverflow(spanSum)) {
      let current = 0
      while (current < itemDataList.length) {
        const item = itemDataList[current]
        if (!item?.suffix) {
          spanSum += item.span
          if (isOverflow(spanSum)) break
          displayIndexList.push(current)
        }
        current++
      }
    }

    overflow = itemDataList.some(
      (item, index) =>
        !!item && !item.suffix && !displayIndexList.includes(index)
    )
  } else {
    displayIndexList = itemDataList.map((_, index) => index)
  }

  return {
    overflow,
    displayIndexList,
  }
}
