/*
 * @Author: changluo
 * @Description:
 * @LastEditors:  
 */
// 引入 Ant Design Vue
import { Button, Table, Card, Input } from 'ant-design-vue';
import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import 'ant-design-vue/dist/antd.css';
import './styles/index.scss';
import { useComponents } from './useComponents.js';
import lcui from '../../../ui/vue-lcui';
import '../../../ui/theme/darkTheme.css';

const antdComs = [Button, Table, Card, Input];
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(lcui);
    antdComs.forEach((com) => ctx.app.use(com));
    useComponents(ctx.app);
  }
};
