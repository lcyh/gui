<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
-->
<template>
  <div
    class="status-icon"
    :class="[prefixCls, { fullscreen }]"
    v-if="lastUpdateTime"
  >
    <span :class="changed ? 'yellow-icon' : 'green-icon'">
      保存于 {{ lastUpdateTime }}
    </span>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, watch, ref } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { SaveStatus } from './Editor.vue';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'TinymceSaveIndicator',
  components: {},
  props: {
    fullscreen: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    saveStatus: Object as PropType<SaveStatus>
  },
  emits: ['uploading', 'done', 'error'],
  setup(props) {
    const prefixCls = useNamespace('tinymce-save-indicator').b();

    const lastUpdateTime = ref<string>('');
    const changed = ref<boolean>(false);

    watch(
      () => props.saveStatus,
      (newVal) => {
        lastUpdateTime.value = newVal?.lastSaveTime
          ? dayjs(newVal?.lastSaveTime).format('YYYY-MM-DD HH:mm:ss')
          : '';
        changed.value = newVal?.changedAfterSave || false;
      }
    );

    return {
      lastUpdateTime,
      changed,
      prefixCls
    };
  }
});
</script>
<style lang="less" scoped>
@prefix-cls: g-tinymce-save-indicator;

.@{prefix-cls} {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 20;

  &.fullscreen {
    position: fixed;
    z-index: 10000;
  }

  .green-icon::before {
    content: '';
    width: 12px;
    height: 12px;
    background: #00ff00;
    border-radius: 50%;
    position: absolute;
    left: -14px;
    top: 5px;
  }

  .yellow-icon::before {
    content: '';
    width: 12px;
    height: 12px;
    background: #ffcc00;
    border-radius: 50%;
    position: absolute;
    left: -14px;
    top: 5px;
  }
}
</style>
