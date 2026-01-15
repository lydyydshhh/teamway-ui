<template>
  <div aria-label="A complete example of page header">
    <ty-page-header @back="onBack">
      <template #breadcrumb>
        <ty-breadcrumb separator="/">
          <ty-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </ty-breadcrumb-item>
          <ty-breadcrumb-item>
            <a href="./page-header.html">route 1</a>
          </ty-breadcrumb-item>
          <ty-breadcrumb-item>route 2</ty-breadcrumb-item>
        </ty-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <ty-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> Title </span>
          <span
            class="text-sm mr-2"
            style="color: var(--ty-text-color-regular)"
          >
            Sub title
          </span>
          <ty-tag>Default</ty-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <ty-button>Print</ty-button>
          <ty-button type="primary" class="ml-2">Edit</ty-button>
        </div>
      </template>

      <ty-descriptions :column="3" size="small" class="mt-4">
        <ty-descriptions-item label="Username">
          kooriookami
        </ty-descriptions-item>
        <ty-descriptions-item label="Telephone">
          18100000000
        </ty-descriptions-item>
        <ty-descriptions-item label="Place">Suzhou</ty-descriptions-item>
        <ty-descriptions-item label="Remarks">
          <ty-tag size="small">School</ty-tag>
        </ty-descriptions-item>
        <ty-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </ty-descriptions-item>
      </ty-descriptions>
      <p class="mt-4 text-sm">
        Tyement Plus team uses <b>weekly</b> release strategy under normal
        circumstance, but critical bug fixes would require hotfix so the actual
        release number <b>could be</b> more than 1 per week.
      </p>
    </ty-page-header>
  </div>
</template>

<script setup lang="ts">
import { TyNotification as notify } from 'element-plus'

const onBack = () => {
  notify('Back')
}
</script>
