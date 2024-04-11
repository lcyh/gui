/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import CropperImage from './src/cropper.vue';

CropperImage.install = function (app: App, displayName?: string): void {
  app.component(displayName || CropperImage.name, CropperImage);
};

export { CropperImage };

export default {
  title: 'Cropper 图片裁剪',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(CropperImage.name, CropperImage);
  }
};
