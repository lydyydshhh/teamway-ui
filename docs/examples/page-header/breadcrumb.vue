<template>
  <ty-page-header>
    <template #breadcrumb>
      <ty-breadcrumb separator="/">
        <ty-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </ty-breadcrumb-item>
        <ty-breadcrumb-item
          ><a href="./page-header.html">route 1</a></ty-breadcrumb-item
        >
        <ty-breadcrumb-item>route 2</ty-breadcrumb-item>
      </ty-breadcrumb>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </ty-page-header>
</template>
