<template>
  <div>
    <ty-button plain @click="openDialog('fade')"> Default </ty-button>
    <ty-button plain @click="openDialog('scale')"> Scale </ty-button>
    <ty-button plain @click="openDialog('slide')"> Slide </ty-button>
    <ty-button plain @click="openDialog('bounce')"> Bounce </ty-button>
    <ty-button plain @click="openDialogWithObject"> Object Config </ty-button>
  </div>

  <ty-dialog
    v-model="dialogVisible"
    class="custom-transition-dialog"
    :title="`${currentAnimation} Animation Dialog`"
    width="30%"
    :transition="transitionConfig"
  >
    <div>
      <p>
        Current animation: <strong>{{ currentAnimation }}</strong>
      </p>
      <p>
        This dialog demonstrates the {{ currentAnimation }} animation effect.
      </p>
      <p v-if="isObjectConfig">
        <strong>Using object configuration:</strong><br />
        <code>{{ JSON.stringify(transitionConfig, null, 2) }}</code>
      </p>
    </div>
    <template #footer>
      <ty-button @click="dialogVisible = false">Cancel</ty-button>
      <ty-button type="primary" @click="dialogVisible = false">
        Confirm
      </ty-button>
    </template>
  </ty-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import type { DialogTransition } from 'element-plus'

const dialogVisible = ref(false)
const currentAnimation = ref('fade')
const isObjectConfig = ref(false)

const transitionConfig = computed<DialogTransition>(() => {
  if (isObjectConfig.value) {
    return {
      name: 'dialog-custom-object',
      appear: true,
      mode: 'out-in',
      duration: 500,
    }
  }
  return `dialog-${currentAnimation.value}`
})

const openDialog = (type: string) => {
  currentAnimation.value = type
  isObjectConfig.value = false
  dialogVisible.value = true
}

const openDialogWithObject = () => {
  currentAnimation.value = 'object-config'
  isObjectConfig.value = true
  dialogVisible.value = true
}
</script>

<style scoped>
code {
  background: var(--ty-bg-color-page);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: block;
  margin-top: 8px;
}
</style>

<style>
/* Scale Animation */
.dialog-scale-enter-active,
.dialog-scale-leave-active,
.dialog-scale-enter-active .ty-dialog,
.dialog-scale-leave-active .ty-dialog {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.dialog-scale-enter-from,
.dialog-scale-leave-to {
  opacity: 0;
}

.dialog-scale-enter-from .ty-dialog,
.dialog-scale-leave-to .ty-dialog {
  transform: scale(0.5);
  opacity: 0;
}

/* Slide Animation */
.dialog-slide-enter-active,
.dialog-slide-leave-active,
.dialog-slide-enter-active .ty-dialog,
.dialog-slide-leave-active .ty-dialog {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.dialog-slide-enter-from,
.dialog-slide-leave-to {
  opacity: 0;
}

.dialog-slide-enter-from .ty-dialog,
.dialog-slide-leave-to .ty-dialog {
  transform: translateY(-100px);
  opacity: 0;
}

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

/* Object Configuration Animation */
.dialog-custom-object-enter-active,
.dialog-custom-object-leave-active,
.dialog-custom-object-enter-active .ty-dialog,
.dialog-custom-object-leave-active .ty-dialog {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.dialog-custom-object-enter-from,
.dialog-custom-object-leave-to {
  opacity: 0;
}

.dialog-custom-object-enter-from .ty-dialog,
.dialog-custom-object-leave-to .ty-dialog {
  transform: rotate(180deg) scale(0.5);
  opacity: 0;
}
</style>
