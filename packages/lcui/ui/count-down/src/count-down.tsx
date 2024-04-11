/*
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
 */
import { defineComponent } from 'vue'
import { countDownProps, CountDownProps } from './count-down-types'
import CountButton from './count-button.vue'
import CountDownInput from './count-input.vue'
import './count-down.scss'
import { prefix } from '../../shared/utils/common-var'

export default defineComponent({
  name: `${prefix}CountDown`,
  props: countDownProps,
  emits: [],
  components: { CountButton, CountDownInput },
  setup(props: CountDownProps, ctx) {
    return () => {
      return (props.type === 'button' ? <CountButton {...props} /> : <CountDownInput {...props} />)
    }
  }
})
