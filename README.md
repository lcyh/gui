<!--
 * @Author: changluo
 * @Description:
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2024-04-11 11:09:41
 * @FilePath: /lcui/README.md
-->

# 简介

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

import lcui from 'lc-gui';
import 'lc-gui/style.css';

createApp(App).use(lcui).mount('#app');
```

## todo

- 迁移组件 测试用例 更新为 vitest
