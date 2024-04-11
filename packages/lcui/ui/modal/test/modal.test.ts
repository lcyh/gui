/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { BasicModal } from '../index';

test('modal test', () => {
  const wrapper = shallowMount(BasicModal, {
    props: {}
  });

  it('modal demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
