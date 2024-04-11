<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Ripple 水波纹指令

水波纹指令，用于点击之后产生水波纹的动效。

## 何时使用

:::tip
v-g-ripple 指令用于点击之后产生水波纹的动效, 可以应用于任何块级元素。
:::

## 基本用法

:::demo 用户 可以在组件 或者 HTML 元素上任意使用 <span color="#409EFF">`v-g-ripple`</span> 指令 使用基本的 <span color="#409EFF">`v-g-ripple`</span> 指令， `v-g-ripple` 接收 一个对象

```vue
<template>
  <ul class="demo-ripple">
    <li
      v-for="item in [
        { color: '#409EFF', text: '这是一条 Primary 涟漪' },
        { color: '#67C23A', text: '这是一条 Success 涟漪' },
        { color: '#E6A23C', text: '这是一条 Warning 涟漪' },
        { color: '#F56C6C', text: '这是一条 Danger 涟漪' },
        { color: '#909399', text: '这是一条 Info 涟漪' }
      ]"
      :style="{ color: item.color }"
    >
      <div
        class="ripple-change-text-color"
        v-g-ripple="{ color: item.color, duration: 300 }"
      >
        {{ item.text }}
      </div>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      msg: 'Ripple 水波纹 组件文档示例'
    };
  }
});
</script>

<style lang="scss">
.demo-ripple {
  list-style: none;
  padding-left: 0;
  .ripple-change-text-color {
    display: block;
    padding: 20px;
    user-select: none;
    cursor: pointer;
  }
}
</style>
```

:::

## button 自定义样式

:::demo

```vue
<template>
  <g-button v-g-ripple style="margin-right:20px">水波纹1</g-button>
  <g-button type="danger" v-g-ripple="{ color: 'green', duration: 1000 }">
    水波纹2
  </g-button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      msg: 'Ripple 水波纹 组件文档示例'
    };
  }
});
</script>

<style lang="scss"></style>
```

:::

## Card 组件 自定义样式

:::demo

```vue
<template>
  <g-card
    v-g-ripple="{ color: 'pink', duration: 300 }"
    class="demo-card"
    :src="'https://devui.design/components/assets/image1.png'"
  >
    <template #avatar>
      <g-avatar name="GUI"></g-avatar>
    </template>
    <template #title>GUI Course</template>
    <template #subtitle class="carg-demo-icon">
      <g-icon icon="ant-design:user-outlined"></g-icon>
      <span>GUI</span>
    </template>
    <template #content>
      GUI is a free open-source and common solution for the front end of
      enterprise mig- and back-end products. Its design values are basedon...
    </template>
    <template v-slot:actions>
      <div class="action-text">Updated at Otc 15 16:20</div>
      <div>
        <g-icon icon="ant-design:like-outlined"></g-icon>
        <g-icon icon="ant-design:more-outlined"></g-icon>
      </div>
    </template>
  </g-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      msg: 'Ripple 水波纹 组件文档示例'
    };
  }
});
</script>

<style lang="scss">
.demo-card {
  cursor: pointer;
  transition: box-shadow 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform
      0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  .card-block {
    margin-right: 16px;

    i {
      cursor: pointer;
      font-size: 16px;
      margin-right: 8px;
      vertical-align: middle;
    }

    i + span {
      vertical-align: middle;
    }
  }

  img {
    max-width: none;
  }

  .action-text {
    color: #8a8e99;
  }
}
</style>
```

:::

## 参数

| 参数     | 类型   | 默认        | 说明                   |
| -------- | ------ | ----------- | ---------------------- |
| color    | string | '#00000050' | 可选，默认当前文本颜色 |
| duration | number | 200         | 可选，持续时间         |
