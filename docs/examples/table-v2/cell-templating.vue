<template>
  <ty-table-v2
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    fixed
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { TableV2FixedDir, TyButton, TyIcon, TyTag, TyTooltip } from 'teamway-ui'
import { Timer } from '@element-plus/icons-vue'

import type { Column } from 'teamway-ui'

let id = 0

const dataGenerator = () => ({
  id: `random-id-${++id}`,
  name: 'Tom',
  date: '2020-10-1',
})

const columns: Column<any>[] = [
  {
    key: 'date',
    title: 'Date',
    dataKey: 'date',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <TyTooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class="flex items-center">
            <TyIcon class="mr-3">
              <Timer />
            </TyIcon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </TyTooltip>
    ),
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <TyTag>{name}</TyTag>,
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <TyButton size="small">Edit</TyButton>
        <TyButton size="small" type="danger">
          Delete
        </TyButton>
      </>
    ),
    width: 150,
    align: 'center',
  },
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))
</script>
