<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# CountTo 数字动画

## 基本用法

:::demo

```vue
<template>
  <div>{{ msg }}</div>
  <g-count-to
    prefix="$"
    :color="'#409EFF'"
    :startVal="1"
    :endVal="200000"
    :duration="8000"
  />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      msg: '组件文档示例'
    };
  }
});
</script>

<style></style>
```

:::

## 参数

| 参数       | 类型    | 默认   | 说明       |
| ---------- | ------- | ------ | ---------- |
| startVal   | number  | 0      | 开始值     |
| endVal     | number  | 2021   | 结束值     |
| duration   | number  | 1500   | 持续时间   |
| autoplay   | boolean | true   | 是否自动   |
| decimals   | number  | 0      | 保留精度   |
| prefix     | string  |        | 前缀       |
| suffix     | string  |        | 后缀       |
| separator  | string  | ,      | 分隔符     |
| decimal    | string  | .      | 小数点符号 |
| color      | string  |        | 颜色       |
| useEasing  | boolean | true   | 动画       |
| transition | string  | linear | 动画类型   |

## 事件

| 事件  | 类型     | 说明         |
| ----- | -------- | ------------ |
| start | ()=>void | 开始执行动画 |
| reset | ()=>void | 重置         |
