/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
const projectName = 'lc-gui';

export function warn(message: string) {
  console.warn(`[${projectName} warn]:${message}`);
}

export function error(message: string) {
  throw new Error(`[${projectName} error]:${message}`);
}
