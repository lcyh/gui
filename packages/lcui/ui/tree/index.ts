/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import Tree from './src/tree';

// 作为插件引入
Tree.install = function (app: App, displayName?: string): void {
  app.component(displayName || Tree.name, Tree);
};

export { Tree };

// 按需
export default {
  title: 'Tree 树',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(Tree.name, Tree);
  }
};
