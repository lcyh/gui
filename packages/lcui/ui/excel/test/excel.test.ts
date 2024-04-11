/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';

import { ImportExcel } from '../index';

test('excel test', () => {
  const wrapper = shallowMount(ImportExcel, {
    props: {}
  });

  it('excel demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
