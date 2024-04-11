/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import Divider from './src/divider';

Divider.install = function (app: App, displayName?: string): void {
  app.component(displayName || Divider.name, Divider);
};

export { Divider };

export default {
  title: 'Divider 分割线',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.component(Divider.name, Divider);
  }
};
