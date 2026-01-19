<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="visible"
      :class="[ns.b(), ns.m(type), ns.is('center', center), ns.is(effect)]"
      role="alert"
    >
      <ty-icon
        v-if="showIcon && ($slots.icon || iconComponent)"
        :class="[ns.e('icon'), ns.is('big', hasDesc)]"
      >
        <slot name="icon">
          <component :is="iconComponent" />
        </slot>
      </ty-icon>

      <div :class="ns.e('content')">
        <span
          v-if="title || $slots.title"
          :class="[ns.e('title'), { 'with-description': hasDesc }]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="hasDesc" :class="ns.e('description')">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="[ns.e('close-btn'), ns.is('customed')]"
            @click="close"
          >
            {{ closeText }}
          </div>
          <ty-icon v-else :class="ns.e('close-btn')" @click="close">
            <Close />
          </ty-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { TyIcon } from '@teamway-ui/components/icon'
import {
  TypeComponents,
  TypeComponentsMap,
  flattedChildren,
  isComment,
} from '@teamway-ui/utils'
import { useNamespace } from '@teamway-ui/hooks'
import { alertEmits, alertProps } from './alert'

const { Close } = TypeComponents

defineOptions({
  name: 'TyAlert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const slots = useSlots()

const ns = useNamespace('alert')

const visible = ref(true)

const iconComponent = computed(() => TypeComponentsMap[props.type])

const hasDesc = computed(() => {
  if (props.description) return true
  const slotContent = slots.default?.()
  if (!slotContent) return false

  const children = flattedChildren(slotContent)
  return children.some((child) => !isComment(child))
})

const close = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}
</script>
