<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Descriptions 描述列表

对 antv 的 Descriptions 组件进行封装

## 何时使用

常见于详情页的信息展示。

## 基本用法

基本示例

:::demo

```vue
<template>
  <g-description
    title="基础示例"
    :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
    :column="3"
    :bordered="false"
    :data="mockData"
    :schema="schema"
  />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const mockData: any = {
      username: 'test',
      nickName: 'VB',
      age: 123,
      phone: '15695909xxx',
      email: '190848757@qq.com',
      addr: '厦门市思明区',
      sex: '男',
      certy: '3504256199xxxxxxxxx',
      tag: 'orange'
    };
    const schema = [
      {
        field: 'username',
        label: '用户名'
      },
      {
        field: 'nickName',
        label: '昵称',
        render: (curVal, data) => {
          return `${data.username}-${curVal}`;
        }
      },
      {
        field: 'phone',
        label: '联系电话'
      },
      {
        field: 'email',
        label: '邮箱'
      },
      {
        field: 'addr',
        label: '地址'
      }
    ];
    return {
      msg: 'Descriptions 描述列表 组件文档示例',
      mockData,
      schema
    };
  }
});
</script>

<style></style>
```

:::

垂直示例

:::demo

```vue
<template>
  <g-description
    class="mt-4"
    title="垂直示例"
    layout="vertical"
    :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
    :column="2"
    :data="mockData"
    :schema="schema"
  />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const mockData: Recordable = {
      username: 'test',
      nickName: 'VB',
      age: '123',
      phone: '15695909xxx',
      email: '190848757@qq.com',
      addr: '厦门市思明区',
      sex: '男',
      certy: '3504256199xxxxxxxxx',
      tag: 'orange'
    };
    const schema: DescItem[] = [
      {
        field: 'username',
        label: '用户名'
      },
      {
        field: 'nickName',
        label: '昵称',
        render: (curVal, data) => {
          return `${data.username}-${curVal}`;
        }
      },
      {
        field: 'phone',
        label: '联系电话'
      },
      {
        field: 'email',
        label: '邮箱'
      },
      {
        field: 'addr',
        label: '地址'
      }
    ];
    return {
      msg: 'Descriptions 描述列表 组件文档示例',
      mockData,
      schema
    };
  }
});
</script>

<style></style>
```

:::

hooks 示例

```vue
<template>
  <g-description title="schema示例" @register="register" class="mt-4" />
</template>

<script>
import { defineComponent } from 'vue';
import { useDescription } from 'lc-gui';
export default defineComponent({
  setup() {
    const mockData: any = {
      username: 'test',
      nickName: 'VB',
      age: 123,
      phone: '15695909xxx',
      email: '190848757@qq.com',
      addr: '厦门市思明区',
      sex: '男',
      certy: '3504256199xxxxxxxxx',
      tag: 'orange'
    };
    const schema = [
      {
        field: 'username',
        label: '用户名'
      },
      {
        field: 'nickName',
        label: '昵称',
        render: (curVal, data) => {
          return `${data.username}-${curVal}`;
        }
      },
      {
        field: 'phone',
        label: '联系电话'
      },
      {
        field: 'email',
        label: '邮箱'
      },
      {
        field: 'addr',
        label: '地址'
      }
    ];
    const [register] = useDescription({
      title: 'useDescription',
      data: mockData,
      schema: schema
    });
    return {
      msg: 'Descriptions 描述列表 组件文档示例',
      mockData,
      schema,
      register
    };
  }
});
</script>

<style></style>
```

## Descriptions 参数

> 除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv Description](https://www.antdv.com/components/descriptions-cn/#API)

| 参数            | 类型           | 默认                                            | 可选值 | 说明                             |
| --------------- | -------------- | ----------------------------------------------- | ------ | -------------------------------- |
| title           | string         | -                                               | -      | 标题                             |
| size            | string         | small                                           | -      | 大小                             |
| bordered        | boolean        | true                                            | -      | 是否展示边框                     |
| useCollapse     | boolean        | -                                               | -      | 是否包裹 CollapseContainer 组件  |
| collapseOptions | Object         | -                                               | -      | CollapseContainer 组件属性       |
| schema          | DescItem[]     | -                                               | -      | 详情项配置，见下方 DescItem 配置 |
| data            | object         | -                                               | -      | 数据源                           |
| column          | Number, Object | \{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 \} | -      | 一行的 DescriptionItems 数量     |

## DescItem 参数

| 事件            | 类型                                                            | 默认 | 可选值 | 说明                     |
| --------------- | --------------------------------------------------------------- | ---- | ------ | ------------------------ |
| field           | string                                                          | -    | -      | 字段名                   |
| label           | string                                                          | -    | -      | 标签名                   |
| labelMinWidth   | number                                                          | -    | -      | label 最小宽度           |
| contentMinWidth | number                                                          | -    | -      | content 最小宽度         |
| labelStyle      | any                                                             | -    | -      | label 样式               |
| span            | number                                                          | -    | -      | 和并列数量               |
| show            | (data)=>boolean                                                 | -    | -      | 动态判断当前组件是否显示 |
| render          | (val: string, data: any)=>VNode,undefined,Element,string,number | -    | -      | 自定义渲染 content       |
