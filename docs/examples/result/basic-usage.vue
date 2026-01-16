<template>
  <ty-row>
    <ty-col :sm="12" :lg="6" :xl="4">
      <ty-result
        icon="primary"
        title="Primary Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <ty-button type="primary">Back</ty-button>
        </template>
      </ty-result>
    </ty-col>
    <ty-col :sm="12" :lg="6" :xl="4">
      <ty-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <ty-button type="primary">Back</ty-button>
        </template>
      </ty-result>
    </ty-col>
    <ty-col :sm="12" :lg="6" :xl="4">
      <ty-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <ty-button type="primary">Back</ty-button>
        </template>
      </ty-result>
    </ty-col>
    <ty-col :sm="12" :lg="6" :xl="4">
      <ty-result
        icon="error"
        title="Error Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <ty-button type="primary">Back</ty-button>
        </template>
      </ty-result>
    </ty-col>
    <ty-col :sm="12" :lg="6" :xl="4">
      <ty-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>Using slot as subtitle</p>
        </template>
        <template #extra>
          <ty-button type="primary">Back</ty-button>
        </template>
      </ty-result>
    </ty-col>
  </ty-row>
</template>

<script setup lang="ts"></script>
