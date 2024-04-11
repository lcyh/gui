<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Tinymce 富文本编辑器

富文本组件

## 基本用法

:::demo

```vue
<template>
  <g-tinymce
    v-model="value"
    :darkMode="darkMode"
    @change="handleChange"
    width="100%"
  />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('hello world!');
    const darkMode = ref('');
    function handleChange(value: string) {
      console.log(value);
    }
    onMounted(() => {
      let htmlEle = document.querySelector('html');
      if (htmlEle.classList.contains('dark')) {
        darkMode.value = 'dark';
      } else {
        darkMode.value = 'light';
      }
    });
    return {
      msg: 'Tinymce 富文本编辑器 组件文档示例',
      value,
      handleChange,
      darkMode
    };
  }
});
</script>

<style></style>
```

:::

## 参数

| 参数            | 类型            | 默认    | 说明             |
| --------------- | --------------- | ------- | ---------------- |
| options         | any {}          | tinymce | 的配置项         |
| value(v-model)  | string          | -       | 双向绑定值       |
| height          | number , string | 400     | 高度             |
| width           | number , string | auto    | 宽度             |
| toolbar         | string[]        | -       | 工具栏           |
| plugins         | string[]        | -       | 插件             |
| showImageUpload | boolean         | true    | 是否显示上传按钮 |

## 事件

| 事件   | 回调参数         | 返回值 | 说明                   |
| ------ | ---------------- | ------ | ---------------------- |
| change | (str:string)=>{} |        | 富文本内容改变触发事件 |
