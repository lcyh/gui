/*
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
 */
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { antdBtnProps, AntdBtnProps } from './antd-btn-types'
import { prefix } from '../../shared/utils/common-var'
import './antd-btn.scss'

export default defineComponent({
  name: `${prefix}AntdBtn`,
  props: antdBtnProps,
  emits: ['click'],
  setup(props: AntdBtnProps, { slots, attrs, emit }) {
    const onClick = (e: MouseEvent) => {
      emit('click', e);
    };
    return () => {
      return (
        <div class="antd-btn">
          <Button v-bind={attrs} {...props} onClick={onClick}>
            {slots.default && slots.default()}
          </Button>
        </div >
      )
    }
  }
})
