import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Tinymce } from '../index';

test('tinymce test', () => {
  const wrapper = shallowMount(Tinymce, {
    props: {}
  });

  it('tinymce demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
