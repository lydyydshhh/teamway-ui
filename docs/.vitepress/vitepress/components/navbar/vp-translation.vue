<script setup lang="ts">
import { useRouter, withBase } from 'vitepress'
import { useTranslation } from '../../composables/translation'

const router = useRouter()
const { getTargetUrl, switchLang, languageMap, langs, lang, locale } =
  useTranslation()

const toTranslation = () => {
  router.go(withBase(`/${lang.value}/guide/translation`))
}
</script>

<template>
  <div class="translation-container">
    <ClientOnly>
      <TyDropdown popper-class="translation-popup" role="navigation">
        <TyIcon :size="24" :aria-label="locale.language">
          <i-ri-translate-2 />
        </TyIcon>
        <template #dropdown>
          <TyDropdownMenu>
            <a v-for="l in langs" :key="l" :href="getTargetUrl(l)">
              <TyDropdownItem
                :class="{ language: true, selected: l === lang }"
                @click.stop="switchLang(l)"
              >
                {{ languageMap[l] }}
              </TyDropdownItem>
            </a>
            <a :href="`/${lang}/guide/translation`">
              <TyDropdownItem
                class="language selected"
                @click.stop="toTranslation"
              >
                {{ locale.help }}
              </TyDropdownItem>
            </a>
          </TyDropdownMenu>
        </template>
      </TyDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;

.translation-container {
  display: none;
  height: 24px;
  padding: 0 12px;
  cursor: pointer;

  @include respond-to('md') {
    display: block;
  }
}
</style>

<style lang="scss">
.ty-dropdown__popper.translation-popup {
  --ty-bg-color-overlay: var(--bg-color);
  --ty-popper-border-radius: 8px;
  --ty-border-color-light: transparent;

  padding: 7px 0;
  min-width: 192px;
  transition: background-color 0.5s;

  .ty-popper__arrow {
    display: none;
  }

  .language {
    padding: 0 16px;
    line-height: 28px;

    &.selected {
      --ty-text-color-regular: var(--brand-color);
    }
  }
}
</style>
