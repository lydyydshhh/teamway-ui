---
title: 内置过渡动画
lang: zh-CN
---

# 内置过渡动画

TeamwayUI 内应用在部分组件的过渡动画，你也可以直接使用。 在使用之前，请阅读 [官方的过渡组件文档](https://vuejs.org/guide/built-ins/transition.html)。

## Fade 淡入淡出

:::demo 提供 `ty-fade-in-linear` 和 `ty-fade-in` 两种效果。

transitions/fade

:::

## Zoom 缩放

:::demo `ty-zoom-in-left`, `ty-zoom-in-center`, `ty-zoom-in-top` and `ty-zoom-in-bottom` are provided.

transitions/zoom

:::

## Collapse 折叠面板

使用 `ty-collapse-transition` 组件实现折叠展开效果。

:::demo

transitions/collapse

:::

## 按需导入

```ts [main.ts]
// collapse
import { TyCollapseTransition } from 'teamway-ui'
// fade/zoom
import 'teamway-ui/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(TyCollapseTransition.name, TyCollapseTransition)
```
