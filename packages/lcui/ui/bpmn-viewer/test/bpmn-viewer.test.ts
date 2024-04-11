/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { BpmnViewer } from '../index';

test('bpmn-viewer test', () => {
  const wrapper = shallowMount(BpmnViewer, {
    props: {}
  });

  it('bpmn-viewer demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
