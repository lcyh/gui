<!--
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2024-01-08 09:41:52
 * @FilePath: /lcui/packages/lcui/README.md
-->

# 简介

[从零到一建立属于自己的前端组件库](https://juejin.cn/post/7124487017588588574)

## 快速开始

### 安装

```shell
# NPM
$ npm install gopher-gui --save

# Yarn
$ yarn add gopher-gui

# pnpm
$ pnpm install gopher-gui
```

### 完整引入

```ts
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import GopherGui from 'gopher-gui';
import 'gopher-gui/style.css';

createApp(App).use(GopherGui).mount('#app');
```
