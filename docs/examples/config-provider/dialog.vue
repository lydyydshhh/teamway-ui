<script lang="ts" setup>
import { computed, nextTick, ref, shallowReactive } from 'vue'

import type { ButtonInstance, DialogTransition } from 'teamway-ui'

type GlobalConfig = {
  alignCenter: boolean
  draggable: boolean
  overflow: boolean
  transition?: DialogTransition
}

const config = shallowReactive<GlobalConfig>({
  alignCenter: false,
  draggable: false,
  overflow: false,
})
const visible = ref(false)
const enableTransition = ref(false)
const isObjectTransition = ref(false)

const buttonRef = ref<ButtonInstance>()

const ANIMATION_DURATION = 300

const globalConfig = computed<GlobalConfig>(() => {
  let transition: DialogTransition | undefined
  if (enableTransition.value) {
    if (isObjectTransition.value) {
      transition = {
        css: false,
        onBeforeEnter(el) {
          nextTick(() => {
            if (buttonRef.value) {
              const buttonRect = buttonRef.value.ref!.getBoundingClientRect()
              const dialogEl = el.querySelector('.ty-dialog') as HTMLElement

              if (dialogEl) {
                const dialogRect = dialogEl.getBoundingClientRect()

                const offsetX =
                  buttonRect.left +
                  buttonRect.width / 2 -
                  (dialogRect.left + dialogRect.width / 2)
                const offsetY =
                  buttonRect.top +
                  buttonRect.height / 2 -
                  (dialogRect.top + dialogRect.height / 2)

                dialogEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.3)`
                dialogEl.style.opacity = '0'
              }
            }
          })
        },
        onEnter(el, done) {
          nextTick(() => {
            const dialogEl = el.querySelector('.ty-dialog') as HTMLElement
            if (dialogEl) {
              // force reflow
              dialogEl.offsetHeight

              dialogEl.style.transition = `all ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 1, 1)`
              dialogEl.style.transform = 'translate(0, 0) scale(1)'
              dialogEl.style.opacity = '1'

              // wait for animation to complete, then cleanup inline styles to avoid affecting drag
              setTimeout(() => {
                dialogEl.style.transition = ''
                dialogEl.style.transform = ''
                dialogEl.style.opacity = ''
                done()
              }, ANIMATION_DURATION)
            } else {
              done()
            }
          })
        },
        onLeave(el, done) {
          const dialogEl = el.querySelector('.ty-dialog') as HTMLElement
          if (dialogEl) {
            if (buttonRef.value) {
              const buttonRect = buttonRef.value.ref!.getBoundingClientRect()
              const dialogRect = dialogEl.getBoundingClientRect()

              const currentTransform = dialogEl.style.transform
              let dragOffsetX = 0
              let dragOffsetY = 0

              // avoid draggable effect
              if (currentTransform) {
                const translateMatch = currentTransform.match(
                  /translate\(([^,]+),\s*([^)]+)\)/
                )
                if (translateMatch) {
                  dragOffsetX = Number.parseFloat(translateMatch[1])
                  dragOffsetY = Number.parseFloat(translateMatch[2])
                }
              }

              const offsetX =
                buttonRect.left +
                buttonRect.width / 2 -
                (dialogRect.left + dialogRect.width / 2) +
                dragOffsetX
              const offsetY =
                buttonRect.top +
                buttonRect.height / 2 -
                (dialogRect.top + dialogRect.height / 2) +
                dragOffsetY

              dialogEl.style.transition = `all ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 1, 1)`
              dialogEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.3)`
              dialogEl.style.opacity = '0'

              // wait for animation to complete, then cleanup inline styles
              setTimeout(() => {
                dialogEl.style.transition = ''
                dialogEl.style.transform = ''
                dialogEl.style.opacity = ''
                done()
              }, ANIMATION_DURATION)
            } else {
              done()
            }
          } else {
            done()
          }
        },
      }
    } else {
      transition = 'dialog-bounce'
    }
  }
  return {
    alignCenter: config.alignCenter,
    draggable: config.draggable,
    overflow: config.overflow,
    transition,
  }
})
</script>

<template>
  <div class="flex flex-col gap-4 justify-center">
    <div class="flex items-center gap-2">
      <ty-switch v-model="config.alignCenter" active-text="alignCenter" />
    </div>
    <div class="flex items-center gap-4">
      <ty-switch v-model="config.draggable" active-text="draggable" />
      <ty-switch
        v-model="config.overflow"
        :disabled="!config.draggable"
        active-text="overflow"
      />
    </div>
    <div class="flex items-center gap-2">
      <ty-switch v-model="enableTransition" active-text="enable transition" />
      <ty-switch
        v-model="isObjectTransition"
        :disabled="!enableTransition"
        active-text="transition: object"
        inactive-text="transition: string"
      />
    </div>
    <div class="flex items-center gap-2">
      <ty-button
        ref="buttonRef"
        type="primary"
        size="small"
        @click="visible = true"
      >
        Open Dialog
      </ty-button>
    </div>
    <ty-config-provider :dialog="globalConfig">
      <ty-dialog v-model="visible" title="Dialog Title" destroy-on-close>
        Dialog Content
      </ty-dialog>
    </ty-config-provider>
    <div v-if="enableTransition" class="text-xs opacity-70">
      <div v-if="isObjectTransition">
        Using JavaScript controlled animation:
        <code>{{ JSON.stringify(globalConfig.transition) }}</code>
      </div>
      <div v-else>
        Using string transition name:
        <code>{{ globalConfig.transition }}</code>
      </div>
    </div>
  </div>
</template>

<style>
/* Bounce Animation */
.dialog-bounce-enter-active,
.dialog-bounce-leave-active,
.dialog-bounce-enter-active .ty-dialog,
.dialog-bounce-leave-active .ty-dialog {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dialog-bounce-enter-from,
.dialog-bounce-leave-to {
  opacity: 0;
}

.dialog-bounce-enter-from .ty-dialog,
.dialog-bounce-leave-to .ty-dialog {
  transform: scale(0.3) translateY(-50px);
  opacity: 0;
}
</style>
