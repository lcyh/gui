import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Descriptions } from '../index';

test('descriptions test', () => {
  const wrapper = shallowMount(Descriptions, {
    props: {}
  });

  it('descriptions demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
