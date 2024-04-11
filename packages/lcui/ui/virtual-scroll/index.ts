/*
 * @Author: changluo
 * @Description:虚拟滚动
 * @LastEditors:
 */
import type { App } from 'vue';
import VirtualScroll from './src/virtual-scroll.vue';

VirtualScroll.install = function (app: App, displayName?: string): void {
  app.component(displayName || VirtualScroll.name, VirtualScroll);
};

export { VirtualScroll };

export default {
  title: 'VirtualScroll 虚拟滚动',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(VirtualScroll.name, VirtualScroll);
  }
};
