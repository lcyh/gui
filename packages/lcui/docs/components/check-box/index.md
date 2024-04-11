# CheckBox 多选框

- 一组备选项中进行多选

## 何时使用

- 在一组选项中进行多项选择；
- 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

## CheckBox 基本用法

:::demo CheckBox 示例

```vue
<template>
  <g-check-box v-model="checked">{{ msg }}</g-check-box>
  <g-check-box v-model="checked2" :label="label"></g-check-box>
  <g-check-box v-model="checked3" :disabled="true">禁用 check-box</g-check-box>
  <g-check-box v-model="checked4" color="RGB(255, 193, 7)">
    改变 icon 的颜色
  </g-check-box>

  <g-check-box v-model="checked5" @change="checkBoxChange">
    checkBoxChange 事件， 关联下方beforeChange的切换状态
  </g-check-box>
  <g-check-box v-model="checked6" :beforeChange="checkBoxBeforeChange">
    beforeChange 返回 {{ checked5 }} {{ checked5 ? '可以' : '不能' }} 切换状态
  </g-check-box>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const checked = ref(true);
    const checked2 = ref(false);
    const checked3 = ref(true);
    const checked4 = ref(true);

    const checked5 = ref(false);
    const checkBoxChange = (val) => {
      console.log(val);
    };

    const checked6 = ref(false);
    const checkBoxBeforeChange = (val) => {
      return checked5.value;
    };

    return {
      msg: '这是默认的插槽',
      label: '这是使用 label 属性',
      checked,
      checked2,
      checked3,
      checked4,
      checked5,
      checkBoxChange,
      checked6,
      checkBoxBeforeChange
    };
  }
});
</script>

<style></style>
```

:::

## CheckBoxGroup 基本用法

:::demo CheckBoxGroup 示例

```vue
<template>
  <div>
    <div>
      <h4>基础示例</h4>
      <g-check-box-group v-model="checkedList">
        <g-check-box label="beijing">北京</g-check-box>
        <g-check-box label="shanghai">上海</g-check-box>
        <g-check-box label="guangzhou">广州</g-check-box>
      </g-check-box-group>
    </div>

    <div class="mt10">
      <h4>禁用</h4>
      <g-check-box-group v-model="checkedList" :disabled="true">
        <g-check-box label="beijing">北京</g-check-box>
        <g-check-box label="shanghai">上海</g-check-box>
        <g-check-box label="guangzhou">广州</g-check-box>
      </g-check-box-group>
    </div>

    <div class="mt10">
      <h4>横向排列</h4>
      <g-check-box-group v-model="checkedList" direction="row">
        <g-check-box label="beijing">北京</g-check-box>
        <g-check-box label="shanghai">上海</g-check-box>
        <g-check-box label="guangzhou">广州</g-check-box>
      </g-check-box-group>
    </div>

    <div class="mt10">
      <h4>checkBoxChange 和 color 颜色</h4>
      <g-check-box-group
        v-model="checkedList"
        color="RGB(255, 193, 7)"
        @change="checkBoxChange"
      >
        <g-check-box label="beijing">北京</g-check-box>
        <g-check-box label="shanghai">上海</g-check-box>
        <g-check-box label="guangzhou">广州</g-check-box>
      </g-check-box-group>
    </div>

    <div class="mt10">
      <h4>
        beforeChange (选中上海可以切换) {{ canChange ? '可以' : '不可以' }}切换
      </h4>
      <g-check-box-group
        v-model="checkedList"
        :beforeChange="checkBoxBeforeChange"
      >
        <g-check-box label="beijing">北京</g-check-box>
        <g-check-box label="shanghai">上海</g-check-box>
        <g-check-box label="guangzhou">广州</g-check-box>
      </g-check-box-group>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const checkedList = ref(['shanghai']);

    const checkBoxChange = (val) => {
      console.log(val);
    };

    const canChange = computed(() => {
      return checkedList.value.includes('shanghai');
    });

    const checkBoxBeforeChange = (isChecked, value) => {
      return canChange.value;
    };

    return {
      checkedList,
      checkBoxChange,
      canChange,
      checkBoxBeforeChange
    };
  }
});
</script>

<style scoped>
.mt10 {
  margin-top: 10px;
}
</style>
```

:::

## CheckBox 参数

| 参数         | 类型                                  | 默认  | 说明                                                                                                             |
| ------------ | ------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| v-model      | boolean                               | --    | 必选，选中项绑定值                                                                                               |
| disabled     | boolean                               | false | 可选，是否禁用                                                                                                   |
| label        | [LabelType](#labeltype)               | --    | 单独使用 check-box 且无默认插槽时当作 info 展示，存在插槽帮定制无效，结合 check-box-group 使用时作为选中项的值。 |
| color        | string                                | --    | 可选，复选框颜色                                                                                                 |
| beforeChange | [BeforeChangeType](#beforechangetype) | --    | 可选，checkbox 切换前的回调函数，返回 boolean 类型，返回 false 可以阻止 checkbox 切换                            |

## CheckBox 事件

| 事件   | 类型     | 说明                                     |
| ------ | -------- | ---------------------------------------- |
| change | Function | 复选框的值改变时发出的事件，值是当前状态 |

## CheckBox 类型定义

### LabelType

```ts
export type LabelType = string | number | boolean;
```

### BeforeChangeType

```ts
export type BeforeChangeType = (
  isChecked: boolean,
  v: string
) => boolean | Promise<boolean>;
```

## CheckBox 插槽

默认插槽

## CheckBoxGroup 参数

| 参数         | 类型                                  | 默认     | 说明                                                                                  |
| ------------ | ------------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| v-model      | Array                                 | []       | 必选，选中项绑定值                                                                    |
| disabled     | boolean                               | false    | 可选，是否禁用                                                                        |
| color        | string                                | --       | 可选，复选框颜色                                                                      |
| direction    | [DirectionType](#directiontype)       | 'column' | 可选，设置横向或纵向排列                                                              |
| beforeChange | [BeforeChangeType](#beforechangetype) | --       | 可选，checkbox 切换前的回调函数，返回 boolean 类型，返回 false 可以阻止 checkbox 切换 |

## CheckBoxGroup 类型定义

### DirectionType

```ts
export type DirectionType = 'row' | 'column';
```

## CheckBoxGroup 事件

| 事件   | 类型     | 说明                                     |
| ------ | -------- | ---------------------------------------- |
| change | Function | 复选框的值改变时发出的事件，值是当前状态 |

## CheckBoxGroup 插槽

默认插槽
