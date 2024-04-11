/*
 * @Author: changluo
 * @Description: 拖拽指令
 * @LastEditors:
 */
import type { App } from 'vue';
import SortableDirective from './src/sortable-directive';

export { SortableDirective };

export default {
  title: 'DragDrop 拖拽',
  category: '高级组件',
  status: '100%',
  install(app: App): void {
    app.directive('GSortable', SortableDirective);
  }
};
