<template>
  <span :class="ns.e('item')">
    <span
      :class="[ns.e('inner'), ns.is('link', !!to)]"
      role="link"
      @click="onClick"
    >
      <slot />
    </span>
    <ty-icon v-if="breadcrumbContext?.separatorIcon" :class="ns.e('separator')">
      <component :is="breadcrumbContext.separatorIcon" />
    </ty-icon>
    <span v-else :class="ns.e('separator')" role="presentation">
      {{ breadcrumbContext?.separator }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject } from 'vue'
import TyIcon from '@teamway-ui/components/icon'
import { useNamespace } from '@teamway-ui/hooks'
import { breadcrumbKey } from './constants'
import { breadcrumbItemProps } from './breadcrumb-item'

import type { Router } from 'vue-router'

defineOptions({
  name: 'TyBreadcrumbItem',
})

const props = defineProps(breadcrumbItemProps)

const instance = getCurrentInstance()!
const breadcrumbContext = inject(breadcrumbKey, undefined)
const ns = useNamespace('breadcrumb')

const router = instance.appContext.config.globalProperties.$router as Router

const onClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>
