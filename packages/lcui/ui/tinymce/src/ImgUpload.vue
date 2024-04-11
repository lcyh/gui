<!--
 * @Author: changluo
 * @Description: 
 * @LastEditors:  
-->
<template>
  <div :class="[prefixCls, { fullscreen }]">
    <Upload
      name="file"
      multiple
      @change="handleChange"
      :action="uploadUrl"
      :showUploadList="false"
      accept=".jpg,.jpeg,.gif,.png,.webp"
    >
      <Button type="primary" v-bind="{ ...getButtonProps }">
        {{ t('upload.imgUpload') }}
      </Button>
    </Upload>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Upload, Button } from 'ant-design-vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { useI18n } from '../../locale/create';

export default defineComponent({
  name: 'TinymceImageUpload',
  components: { Upload },
  props: {
    fullscreen: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    uploadUrl: {
      type: String,
      default: ''
    }
  },
  emits: ['uploading', 'done', 'error'],
  setup(props, { emit }) {
    let uploading = false;

    const uploadUrl = props.uploadUrl;
    const t = useI18n();
    const prefixCls = useNamespace('tinymce-img-upload').b();

    const getButtonProps = computed(() => {
      const { disabled } = props;
      return {
        disabled
      };
    });

    function handleChange(info: Recordable) {
      const file = info.file;
      const status = file?.status;
      const url = file?.response?.url;
      const name = file?.name;

      if (status === 'uploading') {
        if (!uploading) {
          emit('uploading', name);
          uploading = true;
        }
      } else if (status === 'done') {
        emit('done', name, url);
        uploading = false;
      } else if (status === 'error') {
        emit('error');
        uploading = false;
      }
    }

    return {
      prefixCls,
      handleChange,
      uploadUrl,
      t,
      getButtonProps
    };
  }
});
</script>
<style lang="less" scoped>
@prefix-cls: g-tinymce-img-upload;

.@{prefix-cls} {
  position: absolute;
  top: 4px;
  right: 10px;
  z-index: 20;

  &.fullscreen {
    position: fixed;
    z-index: 10000;
  }
}
</style>
