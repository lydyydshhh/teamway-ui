---
title: Number Animation 数值动画
lang: zh-CN
---

# Number Animation 数值动画

以动画方式展示数字变化，适用于金额、统计值等场景。

## 基础用法

通过 `play` 方法手动触发动画播放。

:::demo

number-animation/basic

:::

## 分隔符

设置 `show-separator` 显示千分位分隔符。

:::demo

number-animation/separator

:::

## 动画结束回调

监听 `finish` 事件，在动画结束时执行回调。

:::demo

number-animation/finish

:::

## 精度

使用 `precision` 指定小数位数。

:::demo

number-animation/precision

:::

## 自定义样式

`ty-number-animation` 最外层是 `span` 元素，可通过 class 自定义字体与颜色。

:::demo

number-animation/custom-style

:::

## API

### 属性

| 名称           | 说明                   | 类型       | 默认值 |
| -------------- | ---------------------- | ---------- | ------ |
| active         | 是否开始动画           | ^[boolean] | true   |
| duration       | 动画持续时间（毫秒）   | ^[number]  | 3000   |
| from           | 数值动画起始值         | ^[number]  | 0      |
| precision      | 精度，保留小数点后几位 | ^[number]  | 0      |
| show-separator | 是否显示千分位分隔符   | ^[boolean] | false  |
| to             | 数值动画目标值         | ^[number]  | 0      |

### 事件

| 名称   | 说明         | 类型                    |
| ------ | ------------ | ----------------------- |
| finish | 动画结束触发 | ^[Function]`() => void` |

### Exposes

| 名称 | 说明     | 类型                    |
| ---- | -------- | ----------------------- |
| play | 播放动画 | ^[Function]`() => void` |
