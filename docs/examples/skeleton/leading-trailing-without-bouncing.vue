<template>
  <ty-space direction="vertical" alignment="flex-start">
    <div>
      <label style="margin-right: 16px">Switch Loading</label>
      <ty-switch v-model="loading" />
    </div>
    <ty-skeleton
      style="width: 240px"
      :loading="loading"
      animated
      :throttle="{ leading: 500, trailing: 500, initVal: true }"
    >
      <template #template>
        <ty-skeleton-item variant="image" style="width: 240px; height: 265px" />
        <div style="padding: 14px">
          <ty-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <ty-skeleton-item variant="text" style="margin-right: 16px" />
            <ty-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <ty-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Delicious hamburger</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <ty-button text class="button">operation button</ty-button>
            </div>
          </div>
        </ty-card>
      </template>
    </ty-skeleton>
  </ty-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)
const currentDate = new Date().toDateString()
</script>
