<template>
  <span :class="ns.b()">
    {{ formattedValue.integer
    }}<template v-if="formattedValue.decimal">
      {{ formattedValue.decimalSeparator }}{{ formattedValue.decimal }}
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { numberAnimationEmits, numberAnimationProps } from './number-animation'
import { tween } from './utils'
import { useNamespace } from '@teamway-ui/hooks'

defineOptions({
  name: 'TyNumberAnimation',
})

const props = defineProps(numberAnimationProps)
const emit = defineEmits(numberAnimationEmits)
const ns = useNamespace('number-animation')

const displayedValue = ref(props.from)
let animating = false
let stopTween: (() => void) | undefined

const onUpdate = (currentValue: number) => {
  displayedValue.value = currentValue
}

const onFinish = () => {
  displayedValue.value = props.to
  animating = false
  stopTween = undefined
  emit('finish')
}

const stopAnimate = () => {
  if (stopTween) {
    stopTween()
    stopTween = undefined
  }
  animating = false
}

const animate = (from: number = props.from, to: number = props.to) => {
  stopAnimate()
  displayedValue.value = from

  if (from === to) {
    onFinish()
    return
  }

  animating = true
  stopTween = tween({
    from,
    to,
    duration: props.duration,
    onUpdate,
    onFinish,
  })
}

const formattedValue = computed(() => {
  const fixedValue = displayedValue.value.toFixed(props.precision)
  const [integerPart, decimalPart] = fixedValue.split('.')
  const formatter = new Intl.NumberFormat('zh-CN')
  const decimalSeparator =
    formatter.formatToParts(0.5).find((part) => part.type === 'decimal')
      ?.value ?? '.'

  const integer = props.showSeparator
    ? formatter.format(Number(integerPart))
    : integerPart

  return {
    integer,
    decimal: decimalPart,
    decimalSeparator,
  }
})

function play() {
  if (animating) return
  animate()
}

defineExpose({
  play,
})

watch(
  () => [props.active, props.from, props.to, props.duration],
  ([active]) => {
    if (active) animate()
    else stopAnimate()
  },
  {
    immediate: true,
  }
)

onBeforeUnmount(() => {
  stopAnimate()
})
</script>
