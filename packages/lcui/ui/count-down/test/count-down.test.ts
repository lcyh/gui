import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { CountDown } from '../index';

test('count-down test', () => {
  const wrapper = shallowMount(CountDown, {
    props: {}
  });

  it('count-down demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
