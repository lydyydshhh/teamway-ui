---
title: 主题
lang: zh-CN
---

# 自定义主题

TeamwayUI 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 但是如果需要大规模替换样式，例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。

我们提供四种方法来改变样式变量。

## 更换主题色

### 通过 SCSS 变量

`theme-chalk` 使用SCSS编写而成。 你可以在 `packages/theme-chalk/src/common/var.scss`文件中查找SCSS变量。

:::warning

我们使用 sass 模块（[sass:map](https://sass-lang.com/documentation/values/maps)...）和 `@use` 来重构所有的 SCSS 变量。 通过对所有 SCSS 变量使用 `@use`，解决了由 `@import` 造成的重复输出问题。

> [介绍Sass 模块 | CSS-TRICKS](https://css-tricks.com/introducing-sass-modules/)

例如，我们使用 `$colors` 作为 map 来保存不同类型的颜色。

`$notification` 是所有 `notification` 组件的变量的映射。

:::

```scss
$colors: () !default;
$colors: map.deep-merge(
  (
    'white': #ffffff,
    'black': #000000,
    'primary': (
      'base': #409eff,
    ),
    'success': (
      'base': #67c23a,
    ),
    'warning': (
      'base': #e6a23c,
    ),
    'danger': (
      'base': #f56c6c,
    ),
    'error': (
      'base': #f56c6c,
    ),
    'info': (
      'base': #909399,
    ),
  ),
  $colors
);
```

### 通过 CSS 变量设置

CSS 变量是一个非常有用的功能，几乎所有浏览器都支持。 （IE：啊这？)

> 从 [使用CSS自定义属性(变量) | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 了解更多信息

我们用 css 变量来重构了几乎所有组件的样式系统。

:::tip

它兼容 SCSS 变量系统。 我们使用 SCSS 的函数自动生成需要用到的 css 变量。

:::

这意味着你可以动态地改变组件内的个别变量，以便更好地自定义组件样式，而不需要修改 SCSS 文件重新编译一次。

> 之后，每个组件的 css 变量名称和作用将被写入到对应的组件文档中。

就像这样：

```css
:root {
  --ty-color-primary: green;
}
```

如果你只想自定义一个特定的组件，只需为某些组件单独添加内联样式。

```html
<ty-tag style="--ty-tag-bg-color: red">Tag</ty-tag>
```

出于性能原因，更加推荐你在类名下添加自定义 css 变量，而不是在全局的 `:root` 下。

```css
.custom-class {
  --ty-tag-bg-color: red;
}
```

如果您想要通过 js 控制 css 变量，可以这样做：

```ts
// document.documentElement 是全局变量时
const el = document.documentElement
// const el = document.getElementById('xxx')

// 获取 css 变量
getComputedStyle(el).getPropertyValue(`--ty-color-primary`)

// 设置 css 变量
el.style.setProperty('--ty-color-primary', 'red')
```

如果你想要更优雅的方式，请看这里。 [useCssVar | VueUse](https://vueuse.org/core/usecssvar/)
