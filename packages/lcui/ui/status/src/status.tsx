/*
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
 */
import { defineComponent, computed } from 'vue';
import { statusProps, StatusProps } from './status-types';
import './status.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { prefix } from '../../shared/utils/common-var';

export default defineComponent({
  name: `${prefix}Status`,
  props: statusProps,
  setup(props: StatusProps, { slots }) {
    const ns = useNamespace('status');

    const cls = computed(() => {
      return `${ns.b()} ${ns.m(props.type)}`;
    });

    return () => {
      return (
        <div class={cls.value}>
          <span>{slots.default && slots.default()}</span>
        </div>
      );
    };
  }
});
