/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { CropperImage } from '../index';

test('cropper test', () => {
  const wrapper = shallowMount(CropperImage, {
    props: {}
  });

  it('cropper demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
