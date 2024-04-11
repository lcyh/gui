/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { type App } from 'vue';
import { createAsyncComponent, inBrowser } from '../shared/utils';

const Tinymce = () => createAsyncComponent(() => import('./src/Editor.vue'));

Tinymce.install = function (app: App, displayName?: string): void {
  if (inBrowser) {
    // tinymce内部用到了window.navigator,打包时时nodejs环境没有浏览器api，因此需要判断
    app.component(displayName || 'GTinymce', Tinymce());
  }
};

export { Tinymce };

export default {
  type: 'asyncComponent',
  title: 'Tinymce 富文本编辑器',
  category: '高级组件',
  status: '100%',
  install(app: App): void {
    if (inBrowser) {
      app.component('GTinymce', Tinymce());
    }
  }
};
