import { computed, onMounted, onUpdated, ref, watch } from 'vue'
import { isUndefined } from '@teamway-ui/utils'

import type { Ref } from 'vue'

export const useIndex = ({
  itemRef,
  selector,
  index,
  parentClassName,
}: {
  itemRef: Ref<HTMLElement | undefined>
  selector: string
  index?: Ref<number | undefined>
  parentClassName?: string
}) => {
  const _index = ref(-1)
  const computedIndex = computed(() => index?.value ?? _index.value)
  const parent = ref<HTMLElement>()

  const getParent = () => {
    let parentNode = itemRef.value?.parentElement ?? undefined
    if (parentClassName) {
      while (parentNode && !parentNode.className.includes(parentClassName)) {
        parentNode = parentNode.parentElement ?? undefined
      }
    }
    return parentNode
  }

  const getIndex = () => {
    if (isUndefined(index?.value) && parent.value && itemRef.value) {
      const current = Array.from(
        parent.value.querySelectorAll(selector)
      ).indexOf(itemRef.value)
      if (current !== _index.value) _index.value = current
    }
  }

  watch(itemRef, () => {
    if (itemRef.value && !parent.value) parent.value = getParent()
  })

  onMounted(() => {
    if (itemRef.value) parent.value = getParent()
    getIndex()
  })

  onUpdated(() => getIndex())

  return {
    computedIndex,
  }
}
