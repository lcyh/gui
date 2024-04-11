import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Splitter } from '../index';

test('splitter test', () => {
  const wrapper = shallowMount(Splitter, {
    props: {}
  });

  it('splitter demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
