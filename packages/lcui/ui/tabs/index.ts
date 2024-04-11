/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import Tabs from './src/tabs';
import Tab from './src/components/tab/tab';

Tabs.install = function (app: App, displayName?: string): void {
  app.component(displayName || Tabs.name, Tabs);
};
Tab.install = function (app: App, displayName?: string): void {
  app.component(displayName || Tab.name, Tab);
};
export { Tabs, Tab };

export default {
  title: 'Tabs 选项卡',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(Tabs.name, Tabs);
    app.component(Tab.name, Tab);
  }
};
