/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import BasicDrawer from './src/basic-drawer.vue';

BasicDrawer.install = function (app: App, displayName?: string): void {
  app.component(displayName || BasicDrawer.name, BasicDrawer);
};

export { BasicDrawer };

export default {
  title: 'BasicDrawer 抽屉扩展',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(BasicDrawer.name, BasicDrawer);
  }
};
