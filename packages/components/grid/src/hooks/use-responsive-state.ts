import { computed, onMounted, onUnmounted, ref } from 'vue'
import { isObject } from '@teamway-ui/utils'
import ResponsiveObserve, {
  type ScreenMap,
  responsiveArray,
} from '../utils/responsive-observe'

import type { Ref } from 'vue'
import type { ResponsiveValue } from '../types'

function isResponsiveValue(
  val: number | ResponsiveValue
): val is ResponsiveValue {
  return isObject(val)
}

export function useResponsiveState(
  val: Ref<number | ResponsiveValue>,
  defaultVal: number,
  fallbackToXs = false
) {
  const screens = ref<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
  })

  const result = computed(() => {
    let res = defaultVal
    if (isResponsiveValue(val.value)) {
      for (const breakpoint of responsiveArray) {
        if (
          (screens.value[breakpoint] ||
            (breakpoint === 'xs' && fallbackToXs)) &&
          val.value[breakpoint] !== undefined
        ) {
          res = val.value[breakpoint] as number
          break
        }
      }
    } else {
      res = val.value
    }
    return res
  })

  let subscribeToken = ''

  onMounted(() => {
    subscribeToken = ResponsiveObserve.subscribe((screensVal) => {
      if (isResponsiveValue(val.value)) screens.value = screensVal
    })
  })

  onUnmounted(() => {
    if (subscribeToken) ResponsiveObserve.unsubscribe(subscribeToken)
  })

  return result
}
