/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import Icon from './src/icon.vue';
import SvgIcon from './src/svg-icon.vue';

Icon.install = function (app: App, displayName?: string): void {
  app.component(displayName || Icon.name, Icon);
};
export { Icon, SvgIcon };

export default {
  title: 'Icon 图标',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Icon.name, Icon);
  }
};
