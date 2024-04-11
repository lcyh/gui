/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { App } from 'vue';
import BasicModal from './src/modal.vue';
import './src/modal.less';
import { useModal, useModalInner } from './src/hooks/useModal';

BasicModal.install = function (app: App, displayName?: string): void {
  app.component(displayName || BasicModal.name, BasicModal);
};

export { BasicModal, useModal, useModalInner };

export default {
  title: 'Modal 对话框',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(BasicModal.name, BasicModal);
  }
};
