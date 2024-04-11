<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Modal 对话框

对 antd 的 modal 组件进行封装，扩展拖拽，全屏，自适应高度等功能

## 何时使用

由于弹窗内代码一般作为单文件组件存在，也推荐这样做，所以示例都为单文件组件形式

> 注意 v-bind="$attrs"记得写，用于将弹窗组件的 attribute 传入 BasicModal 组件

## 基本用法

:::demo

```vue
<template>
  <div style="margin-bottom:10px">{{ msg }}</div>
  <g-button @click="() => handleOpen()">打开弹窗</g-button>
  <g-basic-modal
    v-bind="$attrs"
    destroyOnClose
    width="600px"
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
    :visible="visible"
    @ok="closeModal"
    @cancel="closeModal"
  >
    <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </div>
  </g-basic-modal>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { useModal } from '../../../ui/modal/index';

export default defineComponent({
  setup() {
    // const [register, { openModal, closeModal }] = useModal();
    const visible = ref(false);
    const handleOpen = () => {
      // openModal(true);
      visible.value = true;
    };
    const closeModal = () => {
      visible.value = false;
    };

    return {
      msg: '这个例子是用 visible 控制的',
      visible,
      handleOpen,
      closeModal
    };
  }
});
</script>

<style></style>
```

:::

## useModal

这个例子是用 hooks useModal

```vue
<template>
  <g-button @click="() => handleOpen()">打开弹窗</g-button>
  <g-basic-modal
    v-bind="$attrs"
    destroyOnClose
    width="600px"
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
    @ok="closeModal"
    @cancel="closeModal"
  >
    <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </div>
  </g-basic-modal>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useModal } from 'lc-gui';

export default defineComponent({
  setup() {
    const [register, { openModal, closeModal }] = useModal();
    const visible = ref(false);
    const handleOpen = () => {
      openModal(true);
    };
    return {
      msg: '这个例子是用hooks useModal',
      handleOpen,
      closeModal
    };
  }
});
</script>

<style></style>
```

### useModal 用于外部组件调用

```js
const [register, { openModal, setModalProps }] = useModal();
```

### register 用于注册 useModal

```js
<template>
  <BasicModal v-bind='$attrs'></BasicModal>
</template>
```

### openModal 用于打开/关闭弹窗

```js
//  true/false: 打开关闭弹窗
//  data: 传递到子组件的数据
openModal(true, data);
```

### closeModal 用于关闭弹窗

```js
closeModal();
```

### setModalProps 用于设置弹窗属性

```js
setModalProps(props);
```

## useModalInner

用于独立的 Modal 内部调用

```vue
<template>
  <g-basic-modal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    :helpMessage="['提示 1', '提示 2']"
  >
    <g-button type="primary">从内部关闭弹窗</g-button>
    <g-button type="primary">从内部修改title</g-button>
  </g-basic-modal>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicModal, useModalInner } from 'lc-gui';
export default defineComponent({
  components: { BasicModal },
  setup() {
    const [register, { closeModal, setModalProps }] = useModalInner();
    return {
      register,
      closeModal,
      setModalProps: () => {
        setModalProps({ title: 'Modal New Title' });
      }
    };
  }
});
</script>
```

## 参数

除以下参数外，组件库文档内的 props 也都支持，具体可以参考 [antd modal](https://2x.antdv.com/components/modal-cn/#API)。

| 参数                | 类型                  | 默认     | 可选值     | 说明                                                                                         |
| ------------------- | --------------------- | -------- | ---------- | -------------------------------------------------------------------------------------------- |
| title               | string                | -        | -          | modal 标题                                                                                   |
| height              | number                | -        | -          | 固定 modal 的高度                                                                            |
| minHeight           | number                | -        | -          | 设置 modal 的最小高度                                                                        |
| draggable           | boolean               | true     | true/false | 是否开启拖拽                                                                                 |
| useWrapper          | boolean               | true     | true/false | 是否开启自适应高度，开启后会跟随屏幕变化自适应内容，并出现滚动条                             |
| wrapperFooterOffset | number                | 0        | -          | 开启是适应高度后，如果超过屏幕高度，底部和顶部会保持一样的间距，该参数可以用来缩小底部的间距 |
| canFullscreen       | boolean               | true     | true/false | 是否可以进行全屏                                                                             |
| defaultFullscreen   | boolean               | false    | true/false | 默认全屏                                                                                     |
| loading             | boolean               | false    | true/false | loading 状态                                                                                 |
| loadingTip          | string                | -        | -          | loading 文本                                                                                 |
| showCancelBtn       | boolean               | true     | true/false | 显示关闭按钮                                                                                 |
| showOkBtn           | boolean               | true     | true/false | 显示确认按钮                                                                                 |
| helpMessage         | string , string[]     | -        | -          | 标题右侧提示文本                                                                             |
| centered            | boolean               | false    | true/false | 是否居中弹窗                                                                                 |
| cancelText          | string                | '关闭'   | -          | 关闭按钮文本                                                                                 |
| okText              | string                | '保存'   | -          | 确认按钮文本                                                                                 |
| closeFunc           | () => Promise<boolean | 关闭函数 | -          | 关闭前执行，返回 true 则关闭，否则不关闭                                                     |

## 事件

| 事件        | 类型                  | 说明             |
| ----------- | --------------------- | ---------------- |
| ok          | function(e)           | 点击确认按钮回调 |
| cancel      | function(e)           | 点击取消按钮回调 |
| open-change | (visible:boolean)=>{} | 打开或者关闭触发 |

## 插槽

| 插槽名       | 说明                                               |
| ------------ | -------------------------------------------------- |
| default      | 默认区域                                           |
| footer       | 底部区域(会替换掉默认的按钮)                       |
| insertFooter | 关闭按钮的左边(不使用 footer 插槽时有效)           |
| centerFooter | 关闭按钮和确认按钮的中间(不使用 footer 插槽时有效) |
| appendFooter | 确认按钮的右边(不使用 footer 插槽时有效)           |
