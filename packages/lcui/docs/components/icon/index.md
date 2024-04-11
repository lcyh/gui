<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Icon 图标

用于项目内组件的展示，基本支持所有图标库（支持按需加载，只打包所用到的图标）

## 何时使用

Icon 图标

## 基本用法

### Antv Icon 使用 (直接按需引入相应组件即可)

> 在这里查询 [@ant-design/icons-vue](https://3x.antdv.com/components/icon-cn)

:::demo

```vue
<template>
  <div class="icon-wrapper">
    <div class="flex justify-around flex-wrap">
      <g-icon icon="ant-design:question-circle-outlined" :size="30" />
      <g-icon icon="ant-design:github-outlined" :size="30" />
      <g-icon icon="ant-design:wechat-outlined" :size="30" />
      <g-icon icon="ant-design:alipay-outlined" :size="30" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      msg: 'Antv Icon使用 (直接按需引入相应组件即可)'
    };
  }
});
</script>

<style>
.icon-wrapper {
  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
```

:::

### IconIfy 组件使用

> icon 的值可以在 [Iconify](https://icon-sets.iconify.design/) 或 [Netlify](https://icones.netlify.app/collection/ant-design) 上查询

:::demo

```vue
<template>
  <div class="icon-wrapper">
    <div class="flex justify-around flex-wrap">
      <g-icon icon="ion:layers-outline" :size="30" />
      <g-icon icon="ion:bar-chart-outline" :size="30" />
      <g-icon icon="ion:tv-outline" :size="30" />
      <g-icon icon="ion:settings-outline" :size="30" />
    </div>
    <div class="flex justify-around flex-wrap">
      <template v-for="item in 4" :key="item">
        <g-svg-icon :name="`dynamic-avatar-${item}`" size="32" />
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      msg: 'IconIfy 组件使用'
    };
  }
});
</script>

<style>
.icon-wrapper {
  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
```

:::

## 参数

| 参数   | 类型   | 默认 | 说明     |
| ------ | ------ | ---- | -------- |
| icon   | string | -    | 图标名   |
| color  | string | -    | 图标颜色 |
| size   | number | 16   | 图标大小 |
| prefix | string | -    | 图标前缀 |
