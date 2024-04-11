/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import ImportExcel from './src/ImportExcel.vue';
import { jsonToSheetXlsx, aoaToSheetXlsx } from './src/Export2Excel';

ImportExcel.install = function (app: App, displayName?: string): void {
  app.component(displayName || ImportExcel.name, ImportExcel);
};

export { ImportExcel, jsonToSheetXlsx, aoaToSheetXlsx };

export default {
  title: 'Excel 导入导出',
  category: '高级组件',
  status: '100%',
  install(app: App): void {
    app.component(ImportExcel.name, ImportExcel);
  }
};
