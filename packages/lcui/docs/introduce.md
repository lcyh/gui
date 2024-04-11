# 简介

## 版本

- lc-gui 目前还处于开发迭代中。

## 使用包管理器

```shell
# NPM
$ npm install lc-gui --save

# Yarn
$ yarn add lc-gui

# pnpm
$ pnpm install lc-gui
```

## 浏览器直接引入

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lc-gui@version/style.css" />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="https://cdn.jsdelivr.net/npm/lc-gui@version"></script>
</head>

<script>
  const App = {
    data() {
      return {
        message: 'Hello lc-gui'
      };
    }
  };
  const app = Vue.createApp(App);
  app.use(Vuelcui.default);
  app.mount('#app');
</script>
```

## 快速开始

### 完整引入

```ts
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import lcui from 'lc-gui';
import 'lc-gui/style.css';

createApp(App).use(lcui).mount('#app');
```
