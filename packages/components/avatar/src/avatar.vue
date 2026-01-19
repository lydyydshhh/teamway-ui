<template>
  <span :class="avatarClass" :style="sizeStyle">
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      :style="fitStyle"
      @error="handleError"
    />
    <ty-icon v-else-if="icon">
      <component :is="icon" />
    </ty-icon>
    <slot v-else />
  </span>
</template>

<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue'
import { TyIcon } from '@teamway-ui/components/icon'
import { useNamespace } from '@teamway-ui/hooks'
import { addUnit, isNumber, isString } from '@teamway-ui/utils'
import { avatarEmits, avatarProps } from './avatar'
import { avatarGroupContextKey } from './constants'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'TyAvatar',
})

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const avatarGroupContext = inject(avatarGroupContextKey, undefined)

const ns = useNamespace('avatar')

const hasLoadError = ref(false)

const size = computed(() => props.size ?? avatarGroupContext?.size)
const shape = computed(
  () => props.shape ?? avatarGroupContext?.shape ?? 'circle'
)

const avatarClass = computed(() => {
  const { icon } = props
  const classList = [ns.b()]
  if (isString(size.value)) classList.push(ns.m(size.value))
  if (icon) classList.push(ns.m('icon'))
  if (shape.value) classList.push(ns.m(shape.value))
  return classList
})

const sizeStyle = computed(() => {
  return isNumber(size.value)
    ? (ns.cssVarBlock({
        size: addUnit(size.value)!,
      }) as CSSProperties)
    : undefined
})

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit,
}))

// need reset hasLoadError to false if src changed
watch(
  () => [props.src, props.srcSet],
  () => (hasLoadError.value = false)
)

function handleError(e: Event) {
  hasLoadError.value = true
  emit('error', e)
}
</script>
