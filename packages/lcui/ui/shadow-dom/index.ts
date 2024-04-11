/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import ShadowDom from './src/shadow-dom';

ShadowDom.install = function (app: App, displayName?: string): void {
  app.component(displayName || ShadowDom.name, ShadowDom);
};

export { ShadowDom };

export default {
  title: 'Shadow DOM',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(ShadowDom.name, ShadowDom);
  }
};
