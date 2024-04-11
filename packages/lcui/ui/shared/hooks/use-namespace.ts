/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2024-01-17 15:24:42
 * @FilePath: /lcui/packages/lcui/ui/shared/hooks/use-namespace.ts
 */
const prefixCls = `g`;
export type UseNamespace = {
  b: () => string;
  e: (el: string) => string;
  m: (mo: string) => string;
  em: (el: string, mo: string) => string;
};

function createBem(
  namespace: string,
  element?: string,
  modifier?: string
): string {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

/**
 * useNamespace
 *
 * @param block current block name
 * @param needDot Do you need a dot prefix (defalut: false)
 * @returns UseNamespace
 */
export function useNamespace(block: string, needDot = false): UseNamespace {
  const namespace = needDot
    ? `.${prefixCls}-${block}`
    : `${prefixCls}-${block}`;
  const b = () => createBem(namespace);
  const e = (element: string) => (element ? createBem(namespace, element) : '');
  const m = (modifier: string) =>
    modifier ? createBem(namespace, '', modifier) : '';
  const em = (element: string, modifier: string) =>
    element && modifier ? createBem(namespace, element, modifier) : '';
  return {
    b,
    e,
    m,
    em
  };
}
