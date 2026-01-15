<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'

defineOptions({
  name: 'TyMain',
})

const ns = useNamespace('main')
</script>
