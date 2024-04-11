/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import ScrollContainer from './src/scroll-container.vue';

ScrollContainer.install = function (app: App, displayName?: string): void {
  app.component(displayName || ScrollContainer.name, ScrollContainer);
};

export { ScrollContainer };

export default {
  title: 'ScrollContainer 滚动',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(ScrollContainer.name, ScrollContainer);
  }
};
