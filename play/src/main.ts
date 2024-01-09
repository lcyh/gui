/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import { Button, CountTo, Calendar,VueDemo } from 'gopher-gui';
import {
  Button,
  CountTo,
  Calendar,
  VueDemo
} from '../../packages/lcui/ui/vue-lcui';
import 'gopher-gui/style.css';

createApp(App)
  .use(Button)
  .use(CountTo)
  .use(Calendar)
  .use(VueDemo)
  .mount('#app');
