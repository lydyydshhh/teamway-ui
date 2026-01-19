<template>
  <ty-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    directory
    multiple
    :on-change="handleChange"
  >
    <ty-icon class="ty-icon--upload"><upload-filled /></ty-icon>
    <div class="ty-upload__text">
      Drop directory here or <em>click to upload</em>
    </div>
  </ty-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'

import type { UploadFile, UploadFiles } from 'teamway-ui'

const handleChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
</script>
