<template>
  <div>
    <div>
      <ty-checkbox v-model="config.autoInsertSpace">
        autoInsertSpace
      </ty-checkbox>
      <ty-checkbox v-model="config.plain"> plain </ty-checkbox>
      <ty-checkbox v-model="config.round"> round </ty-checkbox>
      <ty-checkbox v-model="config.text"> text </ty-checkbox>
      <ty-select v-model="config.type" class="ml-5" style="max-width: 150px">
        <ty-option
          v-for="type in buttonTypes.filter(Boolean)"
          :key="type"
          :value="type"
        />
      </ty-select>
    </div>
    <ty-divider />
    <ty-config-provider :button="config">
      <ty-button>中文</ty-button>
    </ty-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { buttonTypes } from 'teamway-ui'

const config = reactive({
  autoInsertSpace: true,
  type: 'default',
  plain: true,
  round: true,
  text: false,
})
</script>
