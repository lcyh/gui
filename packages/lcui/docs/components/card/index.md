# Card 卡片

通用卡片容器。

### 何时使用

基础卡片容器，其中可包含文字，列表，图片，段落，用于概览展示时。

## 基本用法

:::demo

```vue
<template>
  <g-card class="carg-demo-basic">
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
    <template #actions>
      <div class="carg-block">
        <g-icon icon="ant-design:like-outlined"></g-icon>
        <span>12</span>
      </div>
      <div class="carg-block">
        <g-icon icon="ant-design:star-outlined"></g-icon>
        <span>8</span>
      </div>
      <div class="carg-block">
        <g-icon icon="ant-design:message-outlined"></g-icon>
        <span>8</span>
      </div>
    </template>
  </g-card>
</template>
<style lang="scss">
.carg-demo-basic {
  cursor: pointer;

  .carg-demo-icon {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .carg-demo-icon + span {
    vertical-align: middle;
  }
  .carg-block {
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
  .carg-container {
    width: 350px;
  }
  .action-text {
    color: #8a8e99;
  }
}
</style>
```

:::

## 阴影效果

你可以定义什么时候展示卡片的增强阴影效果。

使用 shadow 属性设置卡片增强阴影出现的时机。 可选值：'always'|'hover'|'never'，默认是 hover。

:::demo

```vue
<template>
  <g-card shadow="always">
    <template #content>always</template>
  </g-card>
  <g-card>
    <template #content>hover</template>
  </g-card>
  <g-card shadow="never">
    <template #content>never</template>
  </g-card>
</template>
```

:::

### 使用图片

:::demo

```vue
<template>
  <g-card
    class="carg-demo-use-img"
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
    <template #actions>
      <div class="carg-block">
        <g-icon icon="ant-design:like-outlined"></g-icon>
        <span>12</span>
      </div>
      <div class="carg-block">
        <g-icon icon="ant-design:star-outlined"></g-icon>
        <span>8</span>
      </div>
      <div class="carg-block">
        <g-icon icon="ant-design:message-outlined"></g-icon>
        <span>8</span>
      </div>
    </template>
  </g-card>
</template>
<style lang="scss">
.carg-demo-use-img {
  cursor: pointer;

  .icon {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .icon + span {
    vertical-align: middle;
  }
  .carg-block {
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

### 自定义区域

通过 align 可设置操作区域对齐方式：起始对齐、尾部对齐、拉伸对齐。

:::demo

```vue
<template>
  <g-card class="carg-demo-custom-area" :align="'spaceBetween'">
    <div class="custom-avatar">
      <g-avatar
        imgSrc="https://devui.design/components/assets/logo.svg"
        :width="48"
        :height="48"
        :isRound="false"
      ></g-avatar>
      <div class="icon-star-o custom-star-action"></div>
    </div>
    <template v-slot:title>GUI Course</template>
    <template v-slot:actions>
      <div class="action-text">Updated at Otc 15 16:20</div>
      <div>
        <g-icon icon="ant-design:like-outlined"></g-icon>
        <g-icon icon="ant-design:more-outlined"></g-icon>
      </div>
    </template>
  </g-card>
</template>
<style lang="scss">
.carg-demo-custom-area {
  cursor: pointer;

  .icon {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .icon + span {
    vertical-align: middle;
  }
  .carg-block {
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
  .carg-container {
    width: 350px;
  }
  img {
    max-width: none;
  }
  .action-text {
    color: #8a8e99;
  }
  .custom-avatar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .custom-star-action {
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
```

:::

### Card 参数

| 参数   | 类型                        | 默认      | 说明                                                         | 跳转 Demo                 |
| :----- | :-------------------------- | :-------- | :----------------------------------------------------------- | :------------------------ |
| src    | `string`                    | ''        | 可选，图片路径                                               | [使用图片](#使用图片)     |
| align  | [IAlignType](#ialigntype)   | `'start'` | 可选，操作区域对齐方式，分别对应起始对齐，尾部对齐，拉伸对齐 | [自定义区域](#自定义区域) |
| shadow | [IShadowType](#ishadowtype) | `'hover'` | 可选，设置增强阴影显示时机                                   | [阴影效果](#阴影效果)     |

### Card 插槽

两种方式使用：`v-slot:title` 或者具名插槽`#title`

| 名称     | 描述                                   |
| :------- | :------------------------------------- |
| avatar   | 头像区域，用作头像等图片展示           |
| title    | 卡片的主要内容描述，一般定义为卡片名称 |
| subtitle | 对标题的补充，可包含标签等信息         |
| actions  | 决策作用，可以包含操作文本或者操作图标 |

### Card 类型定义

#### IAlignType

```ts
type IAlignType = 'start' | 'end' | 'spaceBetween';
```

#### IShadowType

```ts
type IShadowType = 'always' | 'hover' | 'never';
```
