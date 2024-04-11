/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { PropType, ExtractPropTypes } from 'vue';

export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text';

export type ButtonSizeType = 'large' | 'default' | 'small';
export type ButtonNativeType = 'button' | 'submit' | 'reset';

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button'
  }
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
