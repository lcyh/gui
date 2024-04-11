<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Status 状态

传达交互结果的组件。

## 何时使用

表示一个任务的执行结果时使用。

## 基本用法

:::demo 基本用法

```vue
<template>
  <g-status>Default</g-status>
  <g-status type="success">Success</g-status>
  <g-status type="error">Error</g-status>
  <g-status type="warning">Warning</g-status>
  <g-status type="initial">Initial</g-status>
  <g-status type="waiting">Waiting</g-status>
  <g-status type="running">Running</g-status>
  <g-status type="invalid">Invalid</g-status>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      msg: 'Status 状态 组件文档示例'
    };
  }
});
</script>

<style></style>
```

:::

## Status 参数

| 参数 | 类型                        | 默认    | 说明          |
| ---- | --------------------------- | ------- | ------------- |
| type | [IStatusType](#istatustype) | invalid | status 的类型 |

## Status 插槽

| 插槽名 | 说明     |
| ------ | -------- |
| -      | 默认插槽 |

## Status 类型定义

### IStatusType

```ts
type IStatusType =
  | 'success'
  | 'error'
  | 'initial'
  | 'warning'
  | 'waiting'
  | 'running'
  | 'invalid';
```
