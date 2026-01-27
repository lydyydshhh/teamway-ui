---
title: 全局配置
lang: zh-CN
---

# Config Provider 全局配置

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。

## i18n 配置

通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。

:::demo 使用两个属性来提供 i18n 相关配置

config-provider/usage

:::

## 对按钮进行配置

:::demo

config-provider/button

:::

## 对链接进行配置

:::demo

config-provider/link

:::

## 对 Card 进行配置

:::demo

config-provider/card

:::

## 对 Dialog 进行配置

:::demo

config-provider/dialog

:::

## 对消息进行配置

:::demo

config-provider/message

:::

## 空值配置

<details>
  <summary>支持的组件</summary>

- Cascader 级联选择器
- ColorPicker
- DatePicker 日期选择器
- Select 选择器
- SelectV2 选择器
- TimePicker 时间选择器
- TimeSelect 时间选择
- TreeSelect 树形选择

</details>

设置 `empty-values` 来配置组件的默认空值。 默认值是 `['', null, undefined]`。 如果认为空字符串不是一个空值，可以设置成 `[undefined, null]`。

设置 `value-on-clear` 以设置清空选项的值。 组件默认值是 `undefined`。 在日期组件中是 `null`。 如果想设置成 `undefined`，请使用 `() => undefined`。

:::demo

config-provider/empty-values

:::

## 实验性功能

在本节中，您可以学习如何使用 Config Provider 来提供实验性功能。 现在，我们还没有添加任何实验性功能，但在未来的规划中，我们将添加一些实验性功能。 您可以使用此配置来管理这些功能。

 <!-- TODO -->

## API

### Config Provider Attributes

| 属性名                | 说明                                                   | 类型                                                                                                       | 默认值   |
| --------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | -------- |
| locale                | 翻译文本对象                                           | ^[object]`{name: string, el: TranslatePair}`                                                               | -        |
| size                  | 全局组件大小                                           | ^[enum]`'large' \| 'default' \| 'small'`                                                                   | default  |
| zIndex                | 全局初始化 zIndex 的值                                 | ^[number]                                                                                                  | —        |
| namespace             | 全局组件类名称前缀                                     | ^[string]                                                                                                  | ty       |
| button                | 按钮相关配置，[详见下表](#button-attribute)            | ^[object]`{autoInsertSpace?: boolean, type?: string, plain?: boolean, round?: boolean}`                    | 详见下表 |
| link                  | 链接相关的配置， [见下表](#link-attribute)             | ^[object]`{type?: string, underline?: boolean \| string}`                                                  | 详见下表 |
| dialog                | dialog 相关的配置， [见下表](#dialog-attribute)        | ^[object]`{alignCenter?: boolean, draggable?: boolean, overflow?: boolean, transition?: DialogTransition}` | 详见下表 |
| message               | 消息相关配置， [详见下表](#message-attribute)          | ^[object]`{max?: number}`                                                                                  | 详见下表 |
| experimental-features | 将要添加的实验阶段的功能，所有功能都是默认设置为 false | ^[object]                                                                                                  | —        |
| empty-values          | 输入类组件空值                                         | ^[array]                                                                                                   | —        |
| value-on-clear        | 输入类组件清空值                                       | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                           | —        |

### Button Attribute

| 参数            | 描述                                                                      | 类型                                                                                      | 默认值 |
| --------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------ |
| type            | 按钮类型，在设置`color`时，后者优先。                                     | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' (deprecated)` | —      |
| autoInsertSpace | 两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效) | ^[boolean]                                                                                | false  |
| plain           | 是否为朴素按钮                                                            | ^[boolean]                                                                                | false  |
| text            | 是否为文字按钮                                                            | ^[boolean]                                                                                | false  |
| round           | 是否为圆角按钮                                                            | ^[boolean]                                                                                | false  |

### 链接属性

| 参数      | 描述               | 类型                                                                            | 默认值  |
| --------- | ------------------ | ------------------------------------------------------------------------------- | ------- |
| type      | type               | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | 控制下划线是否出现 | ^[enum]`'always' \| 'hover' \| 'never' \| boolean`                              | hover   |

### Card Attribute

| 属性   | 描述             | 类型                              | 默认值 |
| ------ | ---------------- | --------------------------------- | ------ |
| shadow | 设置阴影显示时机 | ^[enum]`always \| never \| hover` | —      |

### Dialog 属性

| 属性         | 描述                                                                                             | 类型                                   | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------- | ------ |
| align-center | 是否水平垂直对齐对话框                                                                           | ^[boolean]                             | false  |
| draggable    | 为 Dialog 启用可拖拽功能                                                                         | ^[boolean]                             | false  |
| overflow     | 拖动范围可以超出可视区                                                                           | ^[boolean]                             | false  |
| transition   | 对话框动画的自定义过渡配置。 可以是一个字符串（过渡名称），也可以是一个包含 Vue 过渡属性的对象。 | ^[string] / ^[object]`TransitionProps` | —      |

### Message Attribute

| 属性      | 详情                                         | 类型                                                                                     | 默认值 |
| --------- | -------------------------------------------- | ---------------------------------------------------------------------------------------- | ------ |
| max       | 可同时显示的消息最大数量                     | ^[number]                                                                                | —      |
| grouping  | 合并内容相同的消息，不支持 VNode 类型的消息  | ^[boolean]                                                                               | —      |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | ^[number]                                                                                | —      |
| showClose | 是否显示关闭按钮                             | ^[boolean]                                                                               | —      |
| offset    | Message 距离窗口顶部的偏移量                 | ^[number]                                                                                | —      |
| plain     | 是否纯色                                     | ^[boolean]                                                                               | —      |
| placement | 消息放置位置                                 | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'` | :::    |

### Config Provider Slots

| 名称    | 详情           | Type                               |
| ------- | -------------- | ---------------------------------- |
| default | 自定义默认内容 | config: 提供全局配置（从顶部继承） |
