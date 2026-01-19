<template>
  <ty-table
    :data="tableData"
    show-overflow-tooltip
    :tooltip-formatter="tableRowFormatter"
    style="width: 100%"
  >
    <ty-table-column
      prop="address"
      label="extends table formatter"
      width="240"
    />
    <ty-table-column
      prop="tags"
      label="formatter object"
      width="240"
      :tooltip-formatter="({ row }) => row.tags.join(', ')"
    >
      <template #default="{ row }">
        <ty-tag
          v-for="tag in row.tags"
          :key="tag"
          class="tag-item"
          type="primary"
        >
          {{ tag }}
        </ty-tag>
      </template>
    </ty-table-column>
    <ty-table-column
      prop="url"
      label="with vnode"
      width="240"
      :tooltip-formatter="withVNode"
    />
  </ty-table>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { type TableTooltipData, TyLink } from 'teamway-ui'

type TableData = {
  address: string
  tags: string[]
  url: string
}

const tableData: TableData[] = [
  {
    address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
    tags: ['Office', 'Home', 'Park', 'Garden'],
    url: 'https://github.com/element-plus/element-plus/issues',
  },
  {
    address: '760 A Street, South Frankfield, Illinois',
    tags: ['error', 'warning', 'success', 'info'],
    url: 'https://github.com/element-plus/element-plus/pulls',
  },
  {
    address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
    tags: ['one', 'two', 'three', 'four', 'five'],
    url: 'https://github.com/element-plus/element-plus/discussions',
  },
  {
    address: '23618 Windsor Drive, West Ricardoview, Idaho',
    tags: ['blue', 'white', 'dark', 'gray', 'red', 'bright'],
    url: 'https://github.com/element-plus/element-plus/actions',
  },
]

const tableRowFormatter = (data: TableTooltipData<TableData>) => {
  return `${data.cellValue}: table formatter`
}

const withVNode = (data: TableTooltipData<TableData>) => {
  return h(TyLink, { type: 'primary', href: data.cellValue }, () =>
    h('span', null, data.cellValue)
  )
}
</script>

<style scoped>
p {
  margin: 10px;
  padding: 0;
}
.tag-item + .tag-item {
  margin-left: 5px;
}
</style>
