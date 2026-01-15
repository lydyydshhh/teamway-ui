<template>
  <ty-checkbox-group v-model="checkList">
    <ty-checkbox label="Option A" value="Value A" />
    <ty-checkbox label="Option B" value="Value B" />
    <ty-checkbox label="Option C" value="Value C" />
    <ty-checkbox label="disabled" value="Value disabled" disabled />
    <ty-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
  </ty-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
</script>
