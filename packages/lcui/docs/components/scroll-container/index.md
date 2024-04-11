<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# ScrollContainer 滚动

滚动容器组件

## 何时使用

当需要滚动到某个具体位置

## 基本用法

:::demo

```vue
<template>
  <div class="p-4">
    <div class="my-4">
      <g-button @click="scrollTo(100)">滚动到100px位置</g-button>
      <g-button @click="scrollTo(800)">滚动到800px位置</g-button>
      <g-button @click="scrollTo(0)">滚动到顶部</g-button>
      <g-button @click="scrollBottom()">滚动到底部</g-button>
    </div>
    <div class="scroll-wrap">
      <g-scroll-container class="mt-4" ref="scrollRef">
        <ul class="p-3">
          <template v-for="index in 100" :key="index">
            <li class="p-2">
              {{ index }}
            </li>
          </template>
        </ul>
      </g-scroll-container>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, unref } from 'vue';
export default defineComponent({
  setup() {
    const scrollRef = ref(null);
    const getScroll = () => {
      const scroll = unref(scrollRef);
      if (!scroll) {
        throw new Error('scroll is Null');
      }
      return scroll;
    };

    function scrollTo(top: number) {
      getScroll()?.scrollTo(top);
    }

    function scrollBottom() {
      getScroll()?.scrollBottom();
    }

    return {
      scrollTo,
      scrollRef,
      scrollBottom
    };
  }
});
</script>
<style lang="less" scoped>
.g-button {
  margin-right: 5px;
}
.scroll-wrap {
  height: 300px;
  background: var(--component-background);
  ul {
    padding: 0;
  }
  li {
    padding: 0.5rem;
    border: 1px solid var(--border-color-base);
  }
}
</style>
```

:::

## Methods 方法

| 名称          | 回调参数                           | 说明            |
| ------------- | ---------------------------------- | --------------- |
| getScrollWrap | ()=>HtmlElement                    | 获取滚动容器 el |
| scrollBottom  | Function                           | 滚动到底部      |
| scrollTo      | Function(to:number,duration = 500) | 滚动到指定位置  |

## Slots 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认区域 |
