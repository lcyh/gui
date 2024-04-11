/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import CollapseContainer from './src/collapse-container.vue';

CollapseContainer.install = function (app: App, displayName?: string): void {
  app.component(displayName || CollapseContainer.name, CollapseContainer);
};

export { CollapseContainer };

export default {
  title: 'CollapseContainer 折叠',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(CollapseContainer.name, CollapseContainer);
  }
};
