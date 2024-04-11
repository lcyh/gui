<!--
 * @Author: changluo
 * @Description:
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2024-04-11 10:30:51
-->

# 简介

[从零到一建立属于自己的前端组件库](https://juejin.cn/post/7124487017588588574)

## 快速开始

### 安装

```shell
# NPM
$ npm install lc-gui --save

# Yarn
$ yarn add lc-gui

# pnpm
$ pnpm install lc-gui
```

### 完整引入

```ts
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import GopherGui from 'lc-gui';
import 'lc-gui/style.css';

createApp(App).use(GopherGui).mount('#app');
```
