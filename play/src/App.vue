<template>
  <ty-config-provider namespace="ty" :locale="zhCn">
    <div class="play-container">
      <ty-icon color="red">
        <Edit />
      </ty-icon>
      <ty-button>test</ty-button>
      <ty-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
      <ty-button @click="handleClick">播放</ty-button>
      <div>
        <ty-number-animation
          ref="numberAnimationInstRef"
          show-separator
          :from="0"
          :to="1203912"
          :precision="2"
          :active="false"
          @finish="handleFinish"
        >
        </ty-number-animation>
      </div>
    </div>
  </ty-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import zhCn from '@teamway-ui/locale/lang/zh-cn'

const value1 = ref('')

const numberAnimationInstRef = ref()

const handleClick = () => {
  numberAnimationInstRef.value?.play()
}

const handleFinish = () => {
  alert('Finished')
}
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
