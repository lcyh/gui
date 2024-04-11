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
export const antdBtnProps = {
  type: {
    type: Object as PropType<ButtonType>,
    default: 'primary'
  }
} as const;

export type AntdBtnProps = ExtractPropTypes<typeof antdBtnProps>;
