/*
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
 */
import { Modal } from 'ant-design-vue';
import { defineComponent, toRefs, unref } from 'vue';
import { basicProps } from '../props';
import { useModalDragMove } from '../hooks/useModalDrag';
import { extendSlots } from '../../../shared/utils';

export default defineComponent({
  name: 'Modal',
  inheritAttrs: false,
  components: { Modal },
  props: basicProps,
  emits: ['cancel'],
  setup(props, { slots, emit, attrs }) {
    const { visible, draggable, destroyOnClose } = toRefs(props);
    useModalDragMove({
      visible,
      destroyOnClose,
      draggable,
    });

    const onCancel = (e: Event) => {
      emit('cancel', e);
    };

    return () => {
      const propsData = { ...unref(attrs), ...props, onCancel } as Recordable;
      return <Modal {...propsData}>{extendSlots(slots)}</Modal>;
    };
  },
});
