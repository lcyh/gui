import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { AntdBtn } from '../index';

test('antd-btn test', () => {
  const wrapper = shallowMount(AntdBtn, {
    props: {}
  });

  it('antd-btn demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
