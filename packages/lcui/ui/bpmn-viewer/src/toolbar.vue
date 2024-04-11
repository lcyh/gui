<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
-->
<template>
  <div class="toolbar">
    <Tooltip
      :title="
        isFullscreen ? t('common.exitFullScreen') : t('common.enterFullScreen')
      "
      placement="left"
    >
      <div class="item" @click="toggleFullscreen">
        <Icon
          :icon="
            isFullscreen
              ? 'ant-design:fullscreen-exit-outlined'
              : 'ant-design:fullscreen-outlined'
          "
        />
      </div>
    </Tooltip>
    <Tooltip :title="t('common.zoomIn')" placement="left">
      <div class="item" @click="zoomIn">
        <Icon icon="ant-design:zoom-in-outlined" />
      </div>
    </Tooltip>
    <Tooltip :title="t('common.zoomOut')" placement="left">
      <div class="item" @click="zoomOut">
        <Icon icon="ant-design:zoom-out-outlined" />
      </div>
    </Tooltip>
    <Tooltip :title="t('common.reset')" placement="left">
      <div class="item" @click="reset">
        <Icon icon="ant-design:redo-outlined" />
      </div>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { Tooltip } from 'ant-design-vue';
import { Icon } from '../../icon';
import { useI18n } from '../../locale/create';

const props = defineProps({
  isFullscreen: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['zoomIn', 'zoomOut', 'reset', 'toggleFullscreen']);
const t = useI18n();
const zoomIn = () => {
  emit('zoomIn');
};
const zoomOut = () => {
  emit('zoomOut');
};
const reset = () => {
  emit('reset');
};
const toggleFullscreen = () => {
  emit('toggleFullscreen');
};
</script>
<style lang="less" scoped>
@import '../../style-var/index.less';

.toolbar {
  position: absolute;
  right: 0px;
  bottom: 10px;
  z-index: 20;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f0f0f0;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 8px 0;
  .item {
    color: @text-color-secondary;
    cursor: pointer;
    padding: 8px;
    .app-iconify {
      font-size: 24px !important;
    }
    &:hover {
      color: @primary-color;
    }
  }
}
</style>
