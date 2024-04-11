<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# antd-btn

基于 ant-design-vue 的 button 组件,做二次封装参考示例

## 基本用法

:::demo

```vue
<template>
  <g-antd-btn type="primary">{{ msg }}</g-antd-btn>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      msg: 'ant-design按钮'
    };
  }
});
</script>

<style></style>
```

:::

## 参数

| 参数 | 类型                                   | 默认    | 说明               |
| ---- | -------------------------------------- | ------- | ------------------ |
| type | primary ghost dashed link text default | default | 设置按钮类型       |
| size | large middle small                     | middle  | 设置按钮大小       |
| icon | v-slot                                 | -       | 设置按钮的图标类型 |

## 事件

| 事件  | 类型            | 说明             |
| ----- | --------------- | ---------------- |
| click | (event) => void | 点击按钮时的回调 |

## 方法

| 名称    | 说明     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
