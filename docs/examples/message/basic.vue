<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" :plain="true" @click="open">
      Show message
    </ty-button>
    <ty-button class="!ml-0" :plain="true" @click="openVn">VNode</ty-button>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { TyMessage } from 'teamway-ui'

const open = () => {
  TyMessage('This is a message.')
}

const openVn = () => {
  TyMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
