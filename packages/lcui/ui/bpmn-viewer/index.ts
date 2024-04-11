import type { App } from 'vue';
import { createAsyncComponent, inBrowser } from '../shared/utils';
const BpmnViewer = () => createAsyncComponent(() => import('./src/index.vue'));

BpmnViewer.install = function (app: App, displayName?: string): void {
  if (inBrowser) {
    app.component(displayName || 'GBpmnViewer', BpmnViewer());
  }
};

export { BpmnViewer };

export default {
  title: 'BpmnViewer 流程图',
  category: '高级组件',
  status: '100%',
  install(app: App): void {
    if (inBrowser) {
      app.component('GBpmnViewer', BpmnViewer());
    }
  }
};
