<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# BasicDrawer 抽屉扩展

对 antv 的 drawer 组件进行封装，扩展拖拽，全屏，自适应高度等功能。

## 何时使用

## 基本用法

抽屉组件使用示例
:::demo

```vue
<template>
  <g-button type="primary" class="my-4" @click="showDrawer">
    打开Drawer
  </g-button>
  <g-basic-drawer v-model:visible="open" title="Drawer Title" width="50%">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </g-basic-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const open = ref(false);
    const visible = ref(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('open', bool);
    };

    const showDrawer = () => {
      open.value = true;
      visible.value = true;
    };
    return {
      msg: 'BasicDrawer 抽屉扩展 组件文档示例',
      open,
      visible,
      showDrawer
    };
  }
});
</script>

<style></style>
```

:::

自适应高度/显示 footer

:::demo

```vue
<template>
  <g-button type="primary" class="my-4" @click="showDrawer">
    打开Drawer
  </g-button>
  <g-basic-drawer
    v-model:visible="visible"
    showFooter
    title="Drawer Title"
    width="50%"
  >
    <p class="h-20" v-for="index in 40" :key="index">根据屏幕高度自适应</p>
    <template #insertFooter>
      <a-button>btn</a-button>
    </template>
    <template #centerFooter>
      <a-button>btn2</a-button>
    </template>

    <template #appendFooter>
      <a-button>btn3</a-button>
    </template>

    <!-- <template #footer>
      <a-button> customerFooter</a-button>
    </template> -->
  </g-basic-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('open', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
    return {
      msg: 'BasicDrawer 抽屉扩展 组件文档示例',
      visible,
      showDrawer
    };
  }
});
</script>

<style></style>
```

:::

详情页模式

:::demo

```vue
<template>
  <g-button type="primary" class="my-4" @click="showDrawer">
    打开Drawer
  </g-button>
  <g-basic-drawer v-model:visible="visible" title="Drawer Title" width="100%">
    <p class="h-20">Content Message</p>
    <template #titleToolbar>toolbar</template>
  </g-basic-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('open', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
    return {
      msg: 'BasicDrawer 抽屉扩展 组件文档示例',
      visible,
      showDrawer
    };
  }
});
</script>

<style></style>
```

:::

## useDrawerInner

用于独立的 Drawer 内部调用

```vue
<template>
  <g-basic-brawer
    v-bind="$attrs"
    @register="register"
    title="Drawer Title"
    width="50%"
  >
    Drawer Info.
    <g-antd-btn type="primary" @click="closeDrawer">内部关闭drawer</g-antd-btn>
  </g-basic-brawer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicDrawer, useDrawerInner } from 'lc-gui';
export default defineComponent({
  components: { BasicDrawer },
  setup() {
    const [register, { closeDrawer }] = useDrawerInner();
    return { register, closeDrawer };
  }
});
</script>
```

## 参数

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv drawer](https://www.antdv.com/components/drawer-cn/#API)

| 参数           | 类型          | 默认  | 可选值 | 说明                                       |
| -------------- | ------------- | ----- | ------ | ------------------------------------------ |
| loading        | boolean       | false | -      | loading 状态                               |
| loadingText    | string        | ``    | -      | loading 文本                               |
| showDetailBack | boolean       | true  | -      | isDetail=true 状态下是否显示返回按钮       |
| closeFunc      | () => Promise | -     | -      | 自定义关闭函数，返回 true 关闭，否则不关闭 |
| showFooter     | boolean       | -     | -      | 是否显示底部                               |
| footerHeight   | number        | 60    | -      | 底部区域高度                               |

## 事件

| 事件           | 回调参数                | 说明               |
| -------------- | ----------------------- | ------------------ |
| close          | (e)=>void               | 点击关闭回调       |
| visible-change | (visible:boolean)=>void | 弹窗打开关闭时触发 |
| ok             | (e)=>void               | 点击确定回调       |

## 插槽

| 插槽名  | 说明 |
| ------- | ---- |
| default | 默认 |
