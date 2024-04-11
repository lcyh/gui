<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
-->
<template>
  <span :class="getClass">
    <Icon icon="ion:chevron-forward" :style="$attrs.iconStyle" />
  </span>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { Icon } from '../../../icon';
import { useNamespace } from '../../../shared/hooks/use-namespace';

const props = defineProps({
  /**
   * Arrow expand state
   */
  expand: { type: Boolean },
  /**
   * Arrow up by default
   */
  up: { type: Boolean },
  /**
   * Arrow down by default
   */
  down: { type: Boolean },
  /**
   * Cancel padding/margin for inline
   */
  inset: { type: Boolean }
});

const ns = useNamespace('basic-arrow');
const prefixCls = ns.b();

// get component class
const getClass = computed(() => {
  const { expand, up, down, inset } = props;
  return [
    prefixCls,
    {
      [`${prefixCls}--active`]: expand,
      up,
      inset,
      down
    }
  ];
});
</script>
<style lang="less">
@prefix-cls: g-basic-arrow;

.@{prefix-cls} {
  display: inline-block;
  cursor: pointer;
  transform: rotate(0deg);
  transition: all 0.3s ease 0.1s;
  transform-origin: center center;

  &--active {
    transform: rotate(90deg);
  }

  &.inset {
    line-height: 0px;
  }

  &.up {
    transform: rotate(-90deg);
  }

  &.down {
    transform: rotate(90deg);
  }

  &.up.@{prefix-cls}--active {
    transform: rotate(90deg);
  }

  &.down.@{prefix-cls}--active {
    transform: rotate(-90deg);
  }
}
</style>
