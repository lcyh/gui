/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import CheckBox from './src/check-box';
import CheckBoxGroup from './src/check-box-group';

CheckBox.install = function (app: App, displayName?: string): void {
  app.component(displayName || CheckBox.name, CheckBox);
};
CheckBoxGroup.install = function (app: App, displayName?: string): void {
  app.component(displayName || CheckBoxGroup.name, CheckBoxGroup);
};
export { CheckBox, CheckBoxGroup };

export default {
  title: 'CheckBox 多选框',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(CheckBox.name, CheckBox);
    app.component(CheckBoxGroup.name, CheckBoxGroup);
  }
};
