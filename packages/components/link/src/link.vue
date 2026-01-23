<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    :target="disabled || !href ? undefined : target"
    @click="handleClick"
  >
    <ty-icon v-if="icon"><component :is="icon" /></ty-icon>
    <span v-if="$slots.default" :class="ns.e('inner')">
      <slot />
    </span>

    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { TyIcon } from '@teamway-ui/components/icon'
import { useGlobalConfig } from '@teamway-ui/components/config-provider'
import { useDeprecated, useNamespace } from '@teamway-ui/hooks'
import { isBoolean } from '@teamway-ui/utils'
import { linkEmits, linkProps } from './link'

defineOptions({
  name: 'TyLink',
})
const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)
const globalConfig = useGlobalConfig('link')

useDeprecated(
  {
    scope: 'ty-link',
    from: 'The underline option (boolean)',
    replacement: "'always' | 'hover' | 'never'",
    version: '3.0.0',
    ref: 'https://element-plus.org/zh-CN/component/link.html#underline',
  },
  computed(() => isBoolean(props.underline))
)

const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type ?? globalConfig.value?.type ?? 'default'),
  ns.is('disabled', props.disabled),
  ns.is('underline', underline.value === 'always'),
  ns.is('hover-underline', underline.value === 'hover' && !props.disabled),
])

// Boolean compatibility
const underline = computed(() => {
  if (isBoolean(props.underline)) {
    return props.underline ? 'hover' : 'never'
  } else return props.underline ?? globalConfig.value?.underline ?? 'hover'
})

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>
