<!--
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2023-02-17 15:26:23
 * @FilePath: /lcui/README.md
-->

# 简介

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

import lcui from 'gopher-gui';
import 'gopher-gui/style.css';

createApp(App).use(lcui).mount('#app');
```

## todo

- 迁移组件 测试用例 更新为 vitest
