/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { PropType, ExtractPropTypes } from 'vue';

type NumberOrNumberString = PropType<string | number | undefined>;
export const virtualScrollProps = {
  height: [Number, String] as NumberOrNumberString,
  maxHeight: [Number, String] as NumberOrNumberString,
  maxWidth: [Number, String] as NumberOrNumberString,
  minHeight: [Number, String] as NumberOrNumberString,
  minWidth: [Number, String] as NumberOrNumberString,
  width: [Number, String] as NumberOrNumberString,
  bench: {
    type: [Number, String] as NumberOrNumberString,
    default: 0
  },
  itemHeight: {
    type: [Number, String] as NumberOrNumberString,
    required: true
  },
  items: {
    type: Array,
    default: () => []
  }
} as const;

export type VirtualScrollProps = ExtractPropTypes<typeof virtualScrollProps>;
