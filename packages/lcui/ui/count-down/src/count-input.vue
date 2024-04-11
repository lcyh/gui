<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
-->
<template>
  <Input v-bind="$attrs" :class="prefixCls" :size="size" :value="value">
    <template #addonAfter>
      <CountButton
        :size="size"
        :count="count"
        :value="value"
        :beforeStartFunc="sendCodeApi"
      />
    </template>
    <template
      #[item]="data"
      v-for="item in Object.keys($slots).filter((k) => k !== 'addonAfter')"
    >
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </Input>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Input } from 'ant-design-vue';
import CountButton from './count-button.vue';

const props = {
  value: { type: String },
  size: {
    type: String,
    validator: (v) => ['default', 'large', 'small'].includes(v)
  },
  count: { type: Number, default: 60 },
  sendCodeApi: {
    type: Function as PropType<() => Promise<boolean>>,
    default: null
  }
};

export default defineComponent({
  name: 'CountDownInput',
  components: { CountButton, Input },
  inheritAttrs: false,
  props,
  setup(props) {
    const prefixCls = 'countdown-input';

    return { prefixCls };
  }
});
</script>
<style lang="scss">
.countdown-input {
  .ant-input-group-addon {
    padding-right: 0;
    background-color: transparent;
    border: none;

    button {
      font-size: 14px;
    }
  }
}
</style>
