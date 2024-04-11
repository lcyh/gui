/*
 * @Author: changluo
 * @Description:
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import { Button, CountTo, Calendar } from 'lc-gui';
import { Button, CountTo, Calendar } from '../../packages/lcui/ui/vue-lcui';
import 'lc-gui/style.css';

createApp(App).use(Button).use(CountTo).use(Calendar).mount('#app');
