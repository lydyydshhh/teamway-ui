---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 TeamwayUI。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts [main.ts]
import { createApp } from 'vue'
import TeamwayUI from 'teamway-ui'
import 'teamway-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(TeamwayUI)
app.mount('#app')
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

#### 自动导入 <ty-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">推荐</ty-tag>

首先你需要安装`unplugin-vue-components` 插件

::: code-group

```shell [npm]
$ npm install -D unplugin-vue-components
```

```shell [yarn]
$ yarn add -D unplugin-vue-components
```

```shell [pnpm]
$ pnpm install -D unplugin-vue-components
```

:::

导入样式

```ts [main.ts]
import 'teamway-ui/dist/index.css'
```

然后把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中

##### Vite

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [
        (name) => {
          // 处理 Ty 前缀组件：TyButton / TySelect ...
          if (name.startsWith('Ty')) {
            return { name, from: 'teamway-ui' }
          }
        },
      ],
    }),
  ],
})
```

##### Webpack

```js [webpack.config.js]
const Components = require('unplugin-vue-components/webpack')

module.exports = {
  // ...
  plugins: [
    Components({
      resolvers: [
        (name) => {
          // 处理 Ty 前缀组件：TyButton / TySelect ...
          if (name.startsWith('Ty')) {
            return { name, from: 'teamway-ui' }
          }
        },
      ],
    }),
  ],
}
```

### 按需导入

导入样式

```ts [main.ts]
import 'teamway-ui/dist/index.css'
```

```vue [App.vue]
<template>
  <ty-button>I am TyButton</ty-button>
</template>

<script>
import { TyButton } from 'teamway-ui'

export default {
  components: { TyButton },
}
</script>
```

## 全局配置

在引入 TeamwayUI 时，可以传入一个包含 `size` 和 `zIndex` 属性的全局配置对象。 `size` 用于设置表单组件的默认尺寸，`zIndex` 用于设置弹出组件的层级，`zIndex` 的默认值为 `2000`。

完整引入：

```ts [main.ts]
import { createApp } from 'vue'
import TeamwayUI from 'teamway-ui'
import App from './App.vue'

const app = createApp(App)
app.use(TeamwayUI, { size: 'small', zIndex: 3000 })
```

按需引入:

```vue [App.vue]
<template>
  <ty-config-provider :size="size" :z-index="zIndex">
    <app />
  </ty-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { TyConfigProvider } from 'teamway-ui'

export default defineComponent({
  components: {
    TyConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```
