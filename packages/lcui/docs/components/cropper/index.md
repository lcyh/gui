<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Cropper 图片裁剪

图片裁剪组件

### 何时使用

图片裁剪

## 基本用法

:::demo

```vue
<template>
  <g-collapse-container title="矩/圆形裁剪" class="my-4">
    <div class="container p-4">
      <div class="cropper-container mr-10">
        <g-cropper-image
          ref="refCropper"
          src="/assets/devui-design.svg"
          @cropend="handleCropend"
          style="width: 40vw"
          circled
        />
      </div>
      <img :src="cropperImg" class="croppered" v-if="cropperImg" alt="" />
    </div>
    <p v-if="cropperImg">裁剪后图片信息：{{ info }}</p>
  </g-collapse-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const cropperImg = ref('');
    const info = ref('');
    function handleCropend({ imgBase64, imgInfo }) {
      info.value = imgInfo;
      cropperImg.value = imgBase64;
      console.log('handleCropend', { info, cropperImg });
    }
    return { msg: 'hello', handleCropend, cropperImg, info };
  }
});
</script>
<style>
.cropper-container {
  width: 40vw;
}

.croppered {
  height: 360px;
}
</style>
```

:::

## 参数

| 参数            | 类型    | 默认           | 说明             |
| --------------- | ------- | -------------- | ---------------- |
| src             | string  | -              | 图片源           |
| alt             | string  | -              | 图片 alt         |
| circled         | boolean | false          | 圆形裁剪框       |
| realTimePreview | boolean | true           | 实时触发预览     |
| height          | string  | 360px          | 高度             |
| crossorigin     | string  | -              | crossorigin      |
| imageStyle      | object  | ``             | 图片样式         |
| options         | object  | DefaultOptions | corpperjs 配置项 |

## 事件

| 名称         | 说明                      |
| ------------ | ------------------------- |
| cropend      | ()=>({imgBase64,imgInfo}) |
| cropendError | -                         |
