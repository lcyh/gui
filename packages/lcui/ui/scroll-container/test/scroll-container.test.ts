import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { ScrollContainer } from '../index';

test('scroll-container test', () => {
  const wrapper = shallowMount(ScrollContainer, {
    props: {}
  });

  it('scroll-container demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
