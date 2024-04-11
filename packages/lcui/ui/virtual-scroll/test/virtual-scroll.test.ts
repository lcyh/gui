/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { VirtualScroll } from '../index';

test('virtual-scroll test', () => {
  const wrapper = shallowMount(VirtualScroll, {
    props: {}
  });

  it('virtual-scroll demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
