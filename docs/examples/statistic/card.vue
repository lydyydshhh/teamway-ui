<template>
  <ty-row :gutter="16">
    <ty-col :xs="24" :sm="12" :md="8" class="mb-4">
      <div class="statistic-card">
        <ty-statistic :value="98500">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Daily active users
              <ty-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
              >
                <ty-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </ty-icon>
              </ty-tooltip>
            </div>
          </template>
        </ty-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              24%
              <ty-icon>
                <CaretTop />
              </ty-icon>
            </span>
          </div>
        </div>
      </div>
    </ty-col>
    <ty-col :xs="24" :sm="12" :md="8" class="mb-4">
      <div class="statistic-card">
        <ty-statistic :value="693700">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Monthly Active Users
              <ty-tooltip
                effect="dark"
                content="Number of users who logged into the product in one month"
                placement="top"
              >
                <ty-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </ty-icon>
              </ty-tooltip>
            </div>
          </template>
        </ty-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month</span>
            <span class="red">
              12%
              <ty-icon>
                <CaretBottom />
              </ty-icon>
            </span>
          </div>
        </div>
      </div>
    </ty-col>
    <ty-col :xs="24" :sm="12" :md="8" class="mb-4">
      <div class="statistic-card">
        <ty-statistic :value="72000" title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              New transactions today
            </div>
          </template>
        </ty-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              16%
              <ty-icon>
                <CaretTop />
              </ty-icon>
            </span>
          </div>
          <div class="footer-item">
            <ty-icon :size="14">
              <ArrowRight />
            </ty-icon>
          </div>
        </div>
      </div>
    </ty-col>
  </ty-row>
</template>

<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--ty-fill-color) !important;
}

.el-statistic {
  --ty-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--ty-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--ty-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--ty-color-success);
}
.red {
  color: var(--ty-color-error);
}
</style>
