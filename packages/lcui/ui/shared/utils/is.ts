/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { inBrowser } from './common-var';

const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}
export function isFunction(val: unknown) {
  return typeof val === 'function';
}

export const isUndefined = (value: unknown): value is undefined =>
  value === undefined;

export const isNull = (value: unknown): value is null => value === null;

export const isHTMLElement = (value: unknown): value is HTMLElement =>
  inBrowser && 'HTMLElement' in window && value instanceof HTMLElement;

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}
