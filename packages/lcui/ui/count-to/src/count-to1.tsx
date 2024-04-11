/*
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
 */
import { defineComponent } from 'vue'
import { countToProps, CountToProps } from './count-to-types'
import './count-to.scss'
import { prefix } from '../../shared/utils/common-var'

export default defineComponent({
  name: `${prefix}CountTo`,
  props: countToProps,
  emits: [],
  setup(props: CountToProps, ctx) {
    return () => {
      return (<div class="lcui-count-to"></div>)
    }
  }
})
