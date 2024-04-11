/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { PropType, ExtractPropTypes } from 'vue';

export const countDownProps = {
  type: {
    type: String as PropType<'button' | 'input'>,
    default: 'button'
  }
} as const;

export type CountDownProps = ExtractPropTypes<typeof countDownProps>;
