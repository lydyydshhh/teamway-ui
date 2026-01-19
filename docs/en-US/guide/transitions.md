---
title: Built-in Transitions
lang: en-US
---

# Built-in Transition

You can use Element's built-in transitions directly.
Before that, please read the [transition docs](https://vuejs.org/guide/built-ins/transition.html).

## Fade

:::demo We have two fading effects: `ty-fade-in-linear` and `ty-fade-in`.

transitions/fade

:::

## Zoom

:::demo `ty-zoom-in-left`, `ty-zoom-in-center`, `ty-zoom-in-top` and `ty-zoom-in-bottom` are provided.

transitions/zoom

:::

## Collapse

For collapse effect, use the `ty-collapse-transition` component.

:::demo

transitions/collapse

:::

## On-demand import

```ts [main.ts]
// collapse
import { ElCollapseTransition } from 'teamway-ui'
// fade/zoom
import 'element-plus/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
```
