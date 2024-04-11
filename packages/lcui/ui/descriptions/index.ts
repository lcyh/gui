/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import Description from './src/descriptions.vue';
import { useDescription } from './src/useDescription';

Description.install = function (app: App, displayName?: string): void {
  app.component(displayName || Description.name, Description);
};

export { Description, useDescription };

export default {
  title: 'Description 描述列表',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(Description.name, Description);
  }
};
