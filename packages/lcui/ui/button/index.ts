/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import Button from './src/button';

Button.install = function (app: App, displayName?: string): void {
  app.component(displayName || Button.name, Button);
};

export { Button };

export default {
  title: 'Button 按钮',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Button.name, Button);
  }
};
