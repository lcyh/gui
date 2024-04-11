<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
-->
<template>
  <div :class="[`${prefixCls}__header px-2 py-5`, $attrs.class]">
    <BasicTitle :helpMessage="helpMessage" normal>
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else>
        <slot name="title"></slot>
      </template>
    </BasicTitle>
    <div :class="`${prefixCls}__action`">
      <slot name="action"></slot>
      <BasicArrow v-if="canExpan" up :expand="show" @click="$emit('expand')" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicArrow, BasicTitle } from '../../components/Basic';

const props = {
  prefixCls: { type: String },
  helpMessage: {
    type: [Array, String],
    default: ''
  },
  title: { type: String },
  show: { type: Boolean },
  canExpan: { type: Boolean }
};

export default defineComponent({
  components: { BasicArrow, BasicTitle },
  inheritAttrs: false,
  props,
  emits: ['expand']
});
</script>
<style lang="less">
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
