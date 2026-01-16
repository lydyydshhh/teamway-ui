<template>
  <ty-form label-position="left" label-width="auto" style="max-width: 600px">
    <ty-space fill>
      <ty-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </ty-alert>
      <ty-form-item label="Full Name">
        <ty-input v-model="formAccessibility.fullName" />
      </ty-form-item>
    </ty-space>
    <ty-space fill>
      <ty-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br />
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </ty-alert>
      <ty-form-item label="Your Information">
        <ty-row :gutter="20">
          <ty-col :span="12">
            <ty-input
              v-model="formAccessibility.firstName"
              aria-label="First Name"
              placeholder="First Name"
            />
          </ty-col>
          <ty-col :span="12">
            <ty-input
              v-model="formAccessibility.lastName"
              aria-label="Last Name"
              placeholder="Last Name"
            />
          </ty-col>
        </ty-row>
      </ty-form-item>
    </ty-space>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
