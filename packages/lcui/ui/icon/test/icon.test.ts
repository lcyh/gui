import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Icon } from '../index';

test('icon test', () => {
  const wrapper = shallowMount(Icon, {
    props: {}
  });

  it('icon demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
