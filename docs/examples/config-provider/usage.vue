<template>
  <div>
    <ty-button mb-2 @click="toggle">Switch Language</ty-button>
    <br />

    <ty-config-provider :locale="locale">
      <ty-table mb-1 :data="[]" />
      <ty-pagination :total="100" />
    </ty-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from '@teamway-ui/locale/lang/zh-cn'
import en from '@teamway-ui/locale/lang/en'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
