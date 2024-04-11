import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { CollapseContainer } from '../index';

test('collapse-container test', () => {
  const wrapper = shallowMount(CollapseContainer, {
    props: {}
  });

  it('collapse-container demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
