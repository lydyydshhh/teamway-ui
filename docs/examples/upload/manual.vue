<template>
  <ty-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <ty-button type="primary">select file</ty-button>
    </template>

    <ty-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </ty-button>

    <template #tip>
      <div class="ty-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </ty-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadInstance } from 'element-plus'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
