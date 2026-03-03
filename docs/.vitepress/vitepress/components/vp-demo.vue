<script setup lang="ts">
import { computed, getCurrentInstance, ref } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { EVENT_CODE } from 'teamway-ui'
import { CaretTop } from '@element-plus/icons-vue'
import { useLang } from '../composables/lang'
import demoBlockLocale from '../../i18n/component/demo-block.json'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  source: string
  path: string
  rawSource: string
  description: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle()
const lang = useLang()

const sourceCodeRef = ref<HTMLButtonElement>()

const locale = computed(() => demoBlockLocale[lang.value])
const decodedDescription = computed(() => decodeURIComponent(props.description))

const onSourceVisibleKeydown = (e: KeyboardEvent) => {
  if (
    [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(
      e.code
    )
  ) {
    e.preventDefault()
    toggleSourceVisible(false)
    sourceCodeRef.value?.focus()
  }
}

const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error(locale.value['copy-error'])
  }
  try {
    await copy()
    $message.success(locale.value['copy-success'])
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
  <div text="sm" m="y-4" v-html="decodedDescription" />

  <div class="example">
    <div class="example-showcase">
      <slot name="source" />
    </div>

    <TyDivider class="m-0" />

    <div class="op-btns">
      <TyTooltip
        :content="locale['copy-code']"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
        :trigger-keys="[]"
      >
        <TyIcon
          :size="16"
          :aria-label="locale['copy-code']"
          class="op-btn"
          tabindex="0"
          role="button"
          @click="copyCode"
          @keydown.prevent.enter="copyCode"
          @keydown.prevent.space="copyCode"
        >
          <i-ri-file-copy-line />
        </TyIcon>
      </TyTooltip>
      <TyTooltip
        :content="locale['view-source']"
        :show-arrow="false"
        :trigger="['hover', 'focus']"
        :trigger-keys="[]"
      >
        <button
          ref="sourceCodeRef"
          :aria-label="
            sourceVisible ? locale['hide-source'] : locale['view-source']
          "
          class="reset-btn ty-icon op-btn"
          @click="toggleSourceVisible()"
        >
          <TyIcon :size="16">
            <i-ri-code-line />
          </TyIcon>
        </button>
      </TyTooltip>
    </div>

    <TyCollapseTransition>
      <SourceCode :visible="sourceVisible" :source="source" />
    </TyCollapseTransition>

    <Transition name="ty-fade-in-linear">
      <div
        v-show="sourceVisible"
        class="example-float-control"
        tabindex="0"
        role="button"
        @click="toggleSourceVisible(false)"
        @keydown="onSourceVisibleKeydown"
      >
        <TyIcon :size="16">
          <CaretTop />
        </TyIcon>
        <span>{{ locale['hide-source'] }}</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--ty-border-radius-base);

  .example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
    background-color: var(--bg-color);
    border-radius: var(--ty-border-radius-base);
    overflow: auto;
    &:has(.ty-affix) {
      overflow: visible;
    }
  }

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .ty-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--ty-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--ty-color-primary);
    }
  }
}
</style>
