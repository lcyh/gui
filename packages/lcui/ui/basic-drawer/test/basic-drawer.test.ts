import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { BasicDrawer } from '../index';

test('basic-drawer test', () => {
  const wrapper = shallowMount(BasicDrawer, {
    props: {}
  });

  it('basic-drawer demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
