# Shadow DOM

通过使用Shadow DOM，组件内部的DOM结构、样式和脚本可以被隔离，防止与外部DOM发生冲突，从而提供更为稳定和可预测的封装机制。
## 何时使用

可用于富文本内容的展示、组件内部的样式隔离等场景。   

## 基本用法

:::demo Shadow DOM 示例

```vue

<template>
  <p>基本使用</p>
  <div>
    <g-shadow-dom :innerHTML="htmlStr1"></g-shadow-dom>
  </div>
  <hr />
  <p>应用样式</p>
  <div>
    <g-shadow-dom :innerHTML="htmlStr2" :cssSheet="cssSheet"></g-shadow-dom>
  </div>
  <hr />
  <p>通过插槽的方式</p>
  <div>
    <g-shadow-dom>
      <p>这段内容通过插槽的方式</p>
    </g-shadow-dom>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      return {
        htmlStr1: '<h3>这是标题</h3><p>Shadow DOM内部的样式不会受到外部样式的影响</p>',
        htmlStr2: '<p>传入样式改变Shadow DOM内部的样式</p>',
        cssSheet: `
          p {
            color: skyblue;
          }
        `,
      };
    }
  });
</script>

<style>
  /* 外部样式不会影响到Shadow DOM内部的样式 */
  h3 {
    color: red;
  }
</style>
```

:::

## 参数

| 参数        | 类型     | 默认 | 说明                   |
|-----------|--------|----|----------------------|
| innerHTML | string | '' | Shadow DOM内部的        |
| cssSheet  | string | '' | 需要注入到shadow DOM内部的样式 |

## 插槽

| 插槽名     | 说明 |
|---------|----|
| default | 默认 |

