<script setup lang="ts">
import { withBase } from 'vitepress'
import { isExternal } from '../../utils'

defineProps<{
  href?: string
  noIcon?: boolean
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="link-item"
    :class="{ link: href }"
    :href="withBase(href ?? '')"
    :target="isExternal(href) ? '_blank' : undefined"
    :rel="isExternal(href) ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <TyIcon v-if="isExternal(href) && !noIcon">
      <i-ri-external-link-line class="link-icon" />
    </TyIcon>
  </component>
</template>

<style scoped>
.link-item {
  display: flex;
  align-items: center;
}

.ty-icon {
  margin-left: 4px;
}
</style>
