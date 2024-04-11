<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# CollapseContainer 折叠

区域折叠卡片容器

### 基本用法

:::demo

```vue
<template>
  <g-collapse-container title="This is panel header 1">
    <div class="collapse-wrapper">
      <g-icon icon="ion:layers-outline" :size="30" />
      <g-icon icon="ion:bar-chart-outline" :size="30" />
      <g-icon icon="ion:tv-outline" :size="30" />
      <g-icon icon="ion:settings-outline" :size="30" />
    </div>
  </g-collapse-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      msg: 'CollapseContainer 折叠 组件文档示例'
    };
  }
});
</script>
<style>
.collapse-wrapper {
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>
```

:::

## 参数

| 参数                | 类型            | 默认  | 可选值 | 说明                                 |
| ------------------- | --------------- | ----- | ------ | ------------------------------------ |
| title               | string          | -     | -      | 标题                                 |
| canExpan            | boolean         | true  | -      | 是否可以展开，为 true 显示折叠按钮   |
| helpMessage         | string[],string | -     | -      | 标题右侧温馨提醒                     |
| triggerWindowResize | boolean         | false | -      | 展开收缩的时候是否触发 window.resize |
| loading             | boolean         | false | -      | 显示加载骨架屏                       |
| lazyTime            | number          | 0     | -      | 延迟加载时间                         |

## 插槽

| 插槽名  | 说明               |
| ------- | ------------------ |
| title   | 自定义标题         |
| action  | 自定义右侧操作按钮 |
| default | 默认区域           |
| footer  | 自定义底部区域     |
