---
title: Grid 布局
lang: zh-CN
---

# Grid 布局

基于 CSS Grid 的栅格布局组件，适用于更复杂的表单筛选与信息排版场景。

## 基础用法

`cols` 默认为 `24`，可以通过 `span` 控制每个 `grid-item` 占据的列数。

:::demo

grid/basic

:::

## 折叠与后缀

通过 `collapsed` 与 `collapsed-rows` 控制折叠行数，`suffix` 可将操作区放在末尾，并通过插槽参数 `overflow` 获取是否溢出。

:::demo

grid/collapsed

:::

## 响应式

`cols`、`row-gap`、`col-gap`、`span`、`offset` 都支持响应式对象写法。

:::demo

grid/responsive

:::

## API

### Grid Attributes

:::tip
响应式配置支持，具体配置: <ty-tooltip content="支持响应式配置 { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }" placement="top"><ty-tag>Responsive</ty-tag></ty-tooltip>
:::

| 名称           | 说明             | 类型                              | 默认值 |
| -------------- | ---------------- | --------------------------------- | ------ |
| cols           | 每一行展示的列数 | ^[number] / ^[object]`Responsive` | 24     |
| row-gap        | 行与行之间的间距 | ^[number] / ^[object]`Responsive` | 0      |
| col-gap        | 列与列之间的间距 | ^[number] / ^[object]`Responsive` | 0      |
| collapsed      | 是否折叠         | ^[boolean]                        | false  |
| collapsed-rows | 折叠时显示的行数 | ^[number]                         | 1      |

### Grid Item Attributes

:::tip
响应式配置支持，具体配置: <ty-tooltip content="支持响应式配置 { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }" placement="top"><ty-tag>Responsive</ty-tag></ty-tooltip>
:::

| 名称   | 说明                           | 类型                              | 默认值 |
| ------ | ------------------------------ | --------------------------------- | ------ |
| span   | 跨越的格数                     | ^[number] / ^[object]`Responsive` | 1      |
| offset | 左侧间隔格数                   | ^[number] / ^[object]`Responsive` | 0      |
| suffix | 是否是后缀节点（通常放操作区） | ^[boolean]                        | false  |

### Grid Item Slots

| 名称    | 说明     | 类型                             |
| ------- | -------- | -------------------------------- |
| default | 默认插槽 | ^[object]`{ overflow: boolean }` |

## Responsive类型声明

| 属性名 | 说 明                | 类型   | 默认值 |
| ------ | -------------------- | ------ | ------ |
| xs     | < 768px 响应式配置   | number | --     |
| sm     | >= 768px 响应式配置  | number | --     |
| md     | >= 992px 响应式配置  | number | --     |
| lg     | >= 1200px 响应式配置 | number | --     |
| xl     | >= 1920px 响应式配置 | number | --     |

<style lang="scss">
@use '../../examples/layout/index.scss';
</style>
