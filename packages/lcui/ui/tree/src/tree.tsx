/*
 * @Author: changluo
 * @Description:
 * @LastEditors:  
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2024-01-17 17:06:39
 * @FilePath: /lcui/packages/lcui/ui/tree/src/tree.tsx
 */
import { defineComponent, toRefs, ref } from 'vue';
import { treeProps, TreeProps, TreeItem } from './tree-types';
import IconOpen from './components/icon-open';
import IconClose from './components/icon-close';
import useToggle from './composables/use-toggle';
import './tree.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { prefix } from '../../shared/utils/common-var';

export default defineComponent({
  name: `${prefix}Tree`,
  props: treeProps,
  emits: [],
  setup(props: TreeProps) {
    const ns = useNamespace('tree');
    const selected = ref(false)
    const { data } = toRefs(props);
    const { openedData, toggle } = useToggle(data);

    // 增加缩进的展位元素
    const Indent = () => {
      return <span style='display: inline-block; width: 16px; height: 16px;' />;
    };
    const handleSelected = () => {
      selected.value = !selected.value;
    }
    const renderNode = (item: TreeItem, index) => {
      const itemLevel = item.level ? item.level : 0;
      return (
        <div
          class={[ns.e('node'), item.open && ns.em('node', 'open')]}
          style={{ paddingLeft: `${24 * (itemLevel - 1)}px` }}
        >
          <div class={[ns.e('node-content'),]} onClick={() => handleSelected()}>
            <div class={ns.em('node-content', 'value-wrapper')}>
              {item.children ? (
                item.open ? (
                  <IconOpen
                    class='mr-xs'
                    onClick={(e: Event) => toggle(e, item)}
                  /> // 给节点绑定点击事件
                ) : (
                  <IconClose
                    class='mr-xs'
                    onClick={(e: Event) => toggle(e, item)}
                  />
                ) // 给节点绑定点击事件
              ) : (
                <Indent />
              )}
              <span class={ns.e('node-title')}>{item.label}</span>
            </div>
          </div>
        </div>
      );
    };

    return () => {
      return (
        <div class={ns.b()}>
          {openedData.value.map((item: TreeItem, index) => renderNode(item, index))}
        </div>
      );
    };
  }
});
