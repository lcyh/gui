/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import AntdBtn from './src/antd-btn';

AntdBtn.install = function (app: App, displayName?: string): void {
  app.component(displayName || AntdBtn.name, AntdBtn);
};

export { AntdBtn };

export default {
  title: 'AntdBtn 按钮',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(AntdBtn.name, AntdBtn);
  }
};
