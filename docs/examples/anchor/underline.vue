<template>
  <ty-anchor type="underline" :offset="70">
    <ty-anchor-link :href="`#${locale['basic-usage']}`">
      {{ locale['Basic Usage'] }}
    </ty-anchor-link>
    <ty-anchor-link :href="`#${locale['horizontal-mode']}`">
      {{ locale['Horizontal Mode'] }}
    </ty-anchor-link>
    <ty-anchor-link :href="`#${locale['scroll-container']}`">
      {{ locale['Scroll Container'] }}
    </ty-anchor-link>
    <ty-anchor-link :href="`#${locale['anchor-api']}`">
      {{ locale['Anchor API'] }}
      <template #sub-link>
        <ty-anchor-link :href="`#${locale['anchor-attributes']}`">
          {{ locale['Anchor Attributes'] }}
        </ty-anchor-link>
        <ty-anchor-link :href="`#${locale['anchor-events']}`">
          {{ locale['Anchor Events'] }}
        </ty-anchor-link>
      </template>
    </ty-anchor-link>
  </ty-anchor>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import anchorLocale from '../../.vitepress/i18n/component/anchor.json'
import { useLang } from '~/composables/lang'

const lang = useLang()
const locale = computed(() => anchorLocale[lang.value])
</script>
