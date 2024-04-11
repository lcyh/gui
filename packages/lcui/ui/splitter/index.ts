/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import Splitter from './src/splitter';
import SplitterPane from './src/components/splitter-pane';

export * from './src/splitter-types';

Splitter.install = function (app: App, displayName?: string): void {
  app.component(displayName || Splitter.name, Splitter);
};

SplitterPane.install = function (app: App, displayName?: string): void {
  app.component(displayName || SplitterPane.name, SplitterPane);
};

export { Splitter, SplitterPane };

export default {
  title: 'Splitter 分割器',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.component(Splitter.name, Splitter);
    app.component(SplitterPane.name, SplitterPane);
  }
};
