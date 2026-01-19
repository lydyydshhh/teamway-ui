<template>
  <div class="custom-tree-container">
    <p>Using render-content</p>
    <ty-tree
      ref="treeRef1"
      style="max-width: 600px"
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
    />
    <p>Using scoped slot</p>
    <ty-tree
      ref="treeRef2"
      style="max-width: 600px"
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <div class="custom-tree-node">
          <span>{{ node.label }}</span>
          <div>
            <ty-button type="primary" link @click="append(data)">
              Append
            </ty-button>
            <ty-button
              style="margin-left: 4px"
              type="danger"
              link
              @click="remove(node, data)"
            >
              Delete
            </ty-button>
          </div>
        </div>
      </template>
    </ty-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TyButton } from 'teamway-ui'

import type {
  RenderContentContext,
  RenderContentFunction,
  TreeInstance,
} from 'teamway-ui'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}
type Node = RenderContentContext['node']
type Data = RenderContentContext['data']

let id = 1000
const treeRef1 = ref<TreeInstance>()
const treeRef2 = ref<TreeInstance>()

const append = (data: Data) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  treeRef1.value?.append(newChild, data)
  treeRef2.value?.append(newChild, data)
}

const remove = (node: Node, data: Data) => {
  treeRef1.value?.remove(data)
  treeRef2.value?.remove(data)
}

const renderContent: RenderContentFunction = (h, { node, data }) => {
  return h(
    'div',
    {
      class: 'custom-tree-node',
    },
    [
      h('span', null, node.label),
      h('div', null, [
        h(
          TyButton,
          {
            type: 'primary',
            link: true,
            onClick: () => append(data),
          },
          {
            default: () => 'Append',
          }
        ),
        h(
          TyButton,
          {
            type: 'danger',
            link: true,
            style: 'margin-left: 4px',
            onClick: () => remove(node, data),
          },
          {
            default: () => 'Delete',
          }
        ),
      ]),
    ]
  )
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
