<template>
  <div>
    <ty-row>
      <ty-col :span="18">
        <div
          style="
            height: 30px;
            width: 70%;
            background: #000;
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
          "
        >
          Fixed Top Block
        </div>
        <div ref="containerRef" style="height: 300px; overflow-y: auto">
          <div
            id="part1"
            style="
              height: 300px;
              background: rgba(255, 0, 0, 0.02);
              margin-top: 30px;
            "
          >
            part1
          </div>
          <div
            id="part2"
            style="
              height: 300px;
              background: rgba(0, 255, 0, 0.02);
              margin-top: 30px;
            "
          >
            part2
          </div>
          <div
            id="part3"
            style="
              height: 300px;
              background: rgba(0, 0, 255, 0.02);
              margin-top: 30px;
            "
          >
            part3
          </div>
        </div>
      </ty-col>
      <ty-col :span="6">
        <div class="vp-raw">
          <ty-anchor
            :container="containerRef"
            direction="vertical"
            type="default"
            :offset="30"
            @click="handleClick"
          >
            <ty-anchor-link href="#part1" title="part1" />
            <ty-anchor-link href="#part2" title="part2" />
            <ty-anchor-link href="#part3" title="part3" />
          </ty-anchor>
        </div>
      </ty-col>
    </ty-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)

const handleClick = (e: MouseEvent) => {
  e.preventDefault()
}
</script>
