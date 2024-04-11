<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# CountDown

倒计时组件

## 基本用法

组件文档示例

:::demo

```vue
<template>
  <p>{{ msg }}</p>
  <div>
    <g-count-down type="button" />
  </div>
  <p>{{ msg1 }}</p>
  <div>
    <g-count-down type="input" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      msg: ' 倒计时按钮组件',
      msg1: ' 倒计时按钮输入组件'
    };
  }
});
</script>

<style></style>
```

:::

## g-count-down 参数

| 参数            | 类型        | 默认   | 可选值       | 说明                                         |
| --------------- | ----------- | ------ | ------------ | -------------------------------------------- |
| type            | any         | button | button/input | 类型                                         |
| value           | any         | -      | -            | 绑定值                                       |
| count           | number      | 60     | -            | 倒计时时间                                   |
| beforeStartFunc | ()=>promise | -      | -            | 倒计时之前执行的函数，返回 true 才会开始执行 |
|                 |             |        |              |

## g-count-input 参数

| 参数        | 类型        | 默认 | 可选值 | 说明                                         |
| ----------- | ----------- | ---- | ------ | -------------------------------------------- |
| type        | any         | -    | input  | 类型                                         |
| value       | any         | -    | -      | 绑定值                                       |
| count       | number      | 60   | -      | 倒计时时间                                   |
| sendCodeApi | ()=>promise | -    | -      | 倒计时之前执行的函数，返回 true 才会开始执行 |
