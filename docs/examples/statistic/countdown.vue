<template>
  <ty-row :gutter="16">
    <ty-col :xs="24" :sm="12" :md="8" class="text-center mb-4">
      <ty-countdown title="Start to grab" :value="value" />
    </ty-col>
    <ty-col :xs="24" :sm="12" :md="8" class="text-center mb-4">
      <ty-countdown
        title="Remaining VIP time"
        format="HH:mm:ss"
        :value="value1"
      />
      <ty-button class="countdown-footer" type="primary" @click="reset">
        Reset
      </ty-button>
    </ty-col>
    <ty-col :xs="24" :sm="12" :md="8" class="text-center mb-4">
      <ty-countdown format="DD [days] HH:mm:ss" :value="value2">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            <ty-icon style="margin-right: 4px" :size="12">
              <Calendar />
            </ty-icon>
            Still to go until next month
          </div>
        </template>
      </ty-countdown>
      <div class="countdown-footer">{{ value2.format('YYYY-MM-DD') }}</div>
    </ty-col>
  </ty-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Calendar } from '@element-plus/icons-vue'

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs().add(1, 'month').startOf('month'))

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

<style scoped>
.countdown-footer {
  margin-top: 8px;
}
</style>
