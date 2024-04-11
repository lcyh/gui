/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';

import { CollapseTransition } from '../index';

test('transition test', () => {
  const wrapper = shallowMount(CollapseTransition, {
    props: {}
  });

  it('transition demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
