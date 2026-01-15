<template>
  <ty-form :model="form" label-width="auto" style="max-width: 600px">
    <ty-form-item label="Activity name">
      <ty-input v-model="form.name" />
    </ty-form-item>
    <ty-form-item label="Activity zone">
      <ty-select v-model="form.region" placeholder="please select your zone">
        <ty-option label="Zone one" value="shanghai" />
        <ty-option label="Zone two" value="beijing" />
      </ty-select>
    </ty-form-item>
    <ty-form-item label="Activity time">
      <ty-col :span="11">
        <ty-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </ty-col>
      <ty-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </ty-col>
      <ty-col :span="11">
        <ty-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </ty-col>
    </ty-form-item>
    <ty-form-item label="Instant delivery">
      <ty-switch v-model="form.delivery" />
    </ty-form-item>
    <ty-form-item label="Activity type">
      <ty-checkbox-group v-model="form.type">
        <ty-checkbox value="Online activities" name="type">
          Online activities
        </ty-checkbox>
        <ty-checkbox value="Promotion activities" name="type">
          Promotion activities
        </ty-checkbox>
        <ty-checkbox value="Offline activities" name="type">
          Offline activities
        </ty-checkbox>
        <ty-checkbox value="Simple brand exposure" name="type">
          Simple brand exposure
        </ty-checkbox>
      </ty-checkbox-group>
    </ty-form-item>
    <ty-form-item label="Resources">
      <ty-radio-group v-model="form.resource">
        <ty-radio value="Sponsor">Sponsor</ty-radio>
        <ty-radio value="Venue">Venue</ty-radio>
      </ty-radio-group>
    </ty-form-item>
    <ty-form-item label="Activity form">
      <ty-input v-model="form.desc" type="textarea" />
    </ty-form-item>
    <ty-form-item>
      <ty-button type="primary" @click="onSubmit">Create</ty-button>
      <ty-button>Cancel</ty-button>
    </ty-form-item>
  </ty-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
