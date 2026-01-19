<template>
  <div class="flex flex-wrap gap-1">
    <ty-button class="!ml-0" :plain="true" @click="openMsg()"> Top </ty-button>
    <ty-button class="!ml-0" :plain="true" @click="openMsg('top-left')">
      Top Left
    </ty-button>
    <ty-button class="!ml-0" :plain="true" @click="openMsg('top-right')">
      Top Right
    </ty-button>
    <ty-button class="!ml-0" :plain="true" @click="openMsg('bottom')">
      Bottom
    </ty-button>
    <ty-button class="!ml-0" :plain="true" @click="openMsg('bottom-left')">
      Bottom Left
    </ty-button>
    <ty-button class="!ml-0" :plain="true" @click="openMsg('bottom-right')">
      Bottom Right
    </ty-button>
  </div>
</template>

<script lang="ts" setup>
import { TyMessage } from 'teamway-ui'

import type { MessagePlacement, MessageType } from 'teamway-ui'

let topCount = 0
let bottomCount = 0
let topLeftCount = 0
let topRightCount = 0
let bottomLeftCount = 0
let bottomRightCount = 0

const openMsg = (placement: MessagePlacement = 'top') => {
  let count = 0
  let type: MessageType = 'success'

  switch (placement) {
    case 'top':
      count = ++topCount
      type = 'success'
      break
    case 'bottom':
      count = ++bottomCount
      type = 'warning'
      break
    case 'top-left':
      count = ++topLeftCount
      type = 'info'
      break
    case 'top-right':
      count = ++topRightCount
      type = 'primary'
      break
    case 'bottom-left':
      count = ++bottomLeftCount
      type = 'warning'
      break
    case 'bottom-right':
      count = ++bottomRightCount
      type = 'error'
      break
  }

  TyMessage({
    message: `This is a message from the ${placement} ${count}`,
    type,
    placement,
  })
}
</script>
