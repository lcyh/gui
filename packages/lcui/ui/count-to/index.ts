/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 * @Date: 2023-02-18 21:53:07
 * @LastEditTime: 2024-02-27 17:20:09
 * @FilePath: /lcui/packages/lcui/ui/count-to/index.ts
 */
import type { App } from 'vue';
import CountTo from './src/count-to.vue';

CountTo.install = function (app: App, displayName?: string): void {
  app.component(displayName || CountTo.name, CountTo);
};

export { CountTo };

export default {
  title: 'CountTo 数字动画',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(CountTo.name, CountTo);
  }
};
