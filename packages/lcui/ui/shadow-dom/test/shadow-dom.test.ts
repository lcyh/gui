import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ShadowDom } from '../index';

describe('shadow-dom test', () => {
  const wrapper = shallowMount(ShadowDom, {
    innerHTML: '<p>Shadow Dom content</p>'
  });

  it('shadow-dom demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
