/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import type { PropType, ExtractPropTypes } from 'vue';

export type BaseViewerItem = {
  id: number;
  activityId: string;
  operator: string;
  operatorUid: string;
  operation: string;
  operationCode: string;
  reviewComments: string;
  state: string;
  [key: string]: any;
} & Record<string, any>;

export const bpmnViewerProps = {
  xml: {
    type: String as PropType<string>,
    required: true
  },
  activity: {
    type: Array<BaseViewerItem>,
    default: () => []
  },
  showBar: {
    type: Boolean,
    default: true
  }
} as const;

export type BpmnViewerProps = ExtractPropTypes<typeof bpmnViewerProps>;
