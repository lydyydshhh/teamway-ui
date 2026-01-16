<template>
  <ty-row :gutter="16">
    <ty-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <ty-statistic title="Daily active users" :value="268500" />
    </ty-col>
    <ty-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <ty-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <ty-icon style="margin-left: 4px" :size="12">
              <Male />
            </ty-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </ty-statistic>
    </ty-col>
    <ty-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <ty-statistic title="Total Transactions" :value="outputValue" />
    </ty-col>
    <ty-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <ty-statistic title="Feedback number" :value="562">
        <template #suffix>
          <ty-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </ty-icon>
        </template>
      </ty-statistic>
    </ty-col>
  </ty-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 172000
</script>
