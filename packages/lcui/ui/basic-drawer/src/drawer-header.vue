<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
-->
<template>
  <BasicTitle v-if="!isDetail" :class="prefixCls">
    <slot name="title"></slot>
    {{ !$slots.title ? title : '' }}
  </BasicTitle>

  <div :class="[prefixCls, `${prefixCls}--detail`]" v-else>
    <span :class="`${prefixCls}__twrap`">
      <span @click="handleClose" v-if="showDetailBack">
        <ArrowLeftOutlined :class="`${prefixCls}__back`" />
      </span>
      <span v-if="title">{{ title }}</span>
    </span>

    <span :class="`${prefixCls}__toolbar`">
      <slot name="titleToolbar"></slot>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BasicDrawerHeader'
};
</script>
<script lang="ts" setup>
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { BasicTitle } from '../../components/Basic';
import { useNamespace } from '../../shared/hooks/use-namespace';

defineProps({
  isDetail: Boolean,
  showDetailBack: Boolean,
  title: String
});

const emit = defineEmits(['close']);

const prefixCls = useNamespace('basic-drawer-header').b();

function handleClose() {
  emit('close');
}
</script>

<style lang="less">
@import '../../style-var/index.less';
@prefix-cls: g-basic-drawer-header;
@footer-height: 60px;
.@{prefix-cls} {
  display: flex;
  align-items: center;
  height: 100%;

  &__back {
    padding: 0 12px;
    cursor: pointer;

    &:hover {
      color: @primary-color;
    }
  }

  &__twrap {
    flex: 1;
  }

  &__toolbar {
    padding-right: 50px;
  }
}
</style>
