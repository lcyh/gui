<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
 * @Date: 2023-02-19 17:18:07
 * @LastEditTime: 2023-07-07 11:10:41
 * @FilePath: /lcui/play/src/App.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const curDate = ref(new Date());
const curDateChange = (val) => {
  console.log(val);
};
</script>

<template>
  <div style="margin: 10px">
    <c-count-to
      prefix="$"
      :color="'#409EFF'"
      :startVal="1100"
      :endVal="200000"
      :duration="8000"
    />
    <c-button style="margin: 10px" type="danger" size="small">
      湖北1001
    </c-button>
    <!-- <c-calendar v-model="curDate" @change="curDateChange"></c-calendar> -->
    <c-vue-demo>自定义按钮</c-vue-demo>
    <a-button type="primary">ant按钮</a-button>
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['params'],
  setup(props: any) {
    return {};
  }
});
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
