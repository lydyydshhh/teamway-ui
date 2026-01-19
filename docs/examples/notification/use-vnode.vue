<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" plain @click="open">Common VNode</ty-button>
    <ty-button class="!ml-0" plain @click="open1">Dynamic props</ty-button>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { TyNotification, TySwitch } from 'teamway-ui'

const open = () => {
  TyNotification({
    title: 'Use Vnode',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  const checked = ref<boolean | string | number>(false)
  TyNotification({
    title: 'Use Vnode',
    // Should pass a function if VNode contains dynamic props
    message: () =>
      h(TySwitch, {
        modelValue: checked.value,
        'onUpdate:modelValue': (val: boolean | string | number) => {
          checked.value = val
        },
      }),
  })
}
</script>
