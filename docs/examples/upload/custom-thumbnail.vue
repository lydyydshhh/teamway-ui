<template>
  <ty-upload action="#" list-type="picture-card" :auto-upload="false">
    <ty-icon><Plus /></ty-icon>

    <template #file="{ file }">
      <div>
        <img class="ty-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="ty-upload-list__item-actions">
          <span
            class="ty-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <ty-icon><zoom-in /></ty-icon>
          </span>
          <span
            v-if="!disabled"
            class="ty-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <ty-icon><Download /></ty-icon>
          </span>
          <span
            v-if="!disabled"
            class="ty-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <ty-icon><Delete /></ty-icon>
          </span>
        </span>
      </div>
    </template>
  </ty-upload>

  <ty-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </ty-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'teamway-ui'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>
