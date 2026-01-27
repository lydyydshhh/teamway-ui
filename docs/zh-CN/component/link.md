---
title: Link 链接
lang: zh-CN
---

# Link 链接

文字超链接

:::warning 安全警告 `href` prop 将会直接渲染到 `<a>` 标签内部。 如果你传递类似 `javascript:alert(1)` 这样的值或恶意 URL，可能会导致 **XSS** 或**开放重定向漏洞**。

在使用前始终验证并净化 URL。 例如：

<details>
<summary>显示代码示例</summary>

```js
function sanitigzeUrl(url) {
  const allowedprotocol = ['http:', 'https://']
  try {
    const parsed = new URL(url, window.location.origin)
    return allowedProtocols.includes(parsed.protocol) ? parsed.href : '#'
  } catch {
    return '#'
  }
}
```

</details>

:::

## 基础用法

基础的文字链接用法。

:::demo

link/basic

:::

## 禁用状态

文字链接不可用状态。

:::demo

link/disabled

:::

## 下划线

控制下划线是否出现

:::demo

link/underline

:::

## 图标

带图标的链接

:::tip

使用 `icon` 属性来为按钮添加图标。 您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 TeamwayUI 提供了一组图标，您可以在 [icon component](/zh-CN/component/icon)

:::

:::demo

link/with-icon

:::

## Link API

### Attributes

| 属性名    | 说明                 | 类型                                                                            | 默认值  |
| --------- | -------------------- | ------------------------------------------------------------------------------- | ------- |
| type      | 类型                 | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | 控制下划线是否出现   | ^[enum]`'always' \| 'hover' \| 'never' \| boolean`                              | hover   |
| disabled  | 是否禁用状态         | ^[boolean]                                                                      | false   |
| href      | 原生 href 属性       | ^[string]                                                                       | —       |
| target    | 同原生 `target `属性 | ^[enum]`'_blank' \| '_parent' \| '_self' \| '_top'`                             | \_self  |
| icon      | 图标组件             | ^[string] / ^[Component]                                                        | —       |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| icon    | 自定义图标组件 |
