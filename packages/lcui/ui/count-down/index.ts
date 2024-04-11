/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import CountDown from './src/count-down';

CountDown.install = function (app: App, displayName?: string): void {
  app.component(displayName || CountDown.name, CountDown);
};

export { CountDown };

export default {
  title: 'CountDown 倒计时',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(CountDown.name, CountDown);
  }
};
