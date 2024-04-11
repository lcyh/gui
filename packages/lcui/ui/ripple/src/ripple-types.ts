/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
export interface RippleOptions {
  event: string;
  transition: number;
}

export interface RippleProto {
  background?: string;
  zIndex?: string;
}

export type EventType = Event & MouseEvent & TouchEvent;
