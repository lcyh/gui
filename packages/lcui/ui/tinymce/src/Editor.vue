<template>
  <div :class="prefixCls" :style="{ width: containerWidth }">
    <ImgUpload
      :fullscreen="fullscreen"
      :upload-url="uploadUrl"
      @uploading="handleImageUploading"
      @done="handleDone"
      v-if="showImageUpload"
      v-show="editorRef"
      :disabled="disabled"
    />
    <TinymceSaveIndicator
      v-if="enableAutoSave"
      v-show="isMounted"
      :saveStatus="saveStatus"
    />
    <textarea
      data-cy="tinymce-editor"
      :id="tinymceId"
      ref="elRef"
      :style="{ visibility: 'hidden' }"
      v-if="!initOptions.inline"
    ></textarea>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import type { Editor, RawEditorSettings } from 'tinymce';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/icons/default/icons';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/noneditable';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/print';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/tabfocus';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

import {
  defineComponent,
  computed,
  nextTick,
  ref,
  unref,
  watch,
  onDeactivated,
  onBeforeUnmount
} from 'vue';
import type { PropType } from 'vue';
import ImgUpload from './ImgUpload.vue';
import TinymceSaveIndicator from './SaveIndicator.vue';
import { toolbar, plugins, menu } from './tinymce';
import { bindHandlers } from './helper';
import { onMountedOrActivated } from '../../shared/hooks/onMountedOrActivated';
import { isNumber, buildShortUUID, prefix } from '../../shared/utils';
import { useNamespace } from '../../shared/hooks/use-namespace';

const tinymceProps = {
  options: {
    type: Object as PropType<Partial<RawEditorSettings>>,
    default: {}
  },
  value: {
    type: String
  },

  toolbar: {
    type: Array as PropType<string[]>,
    default: toolbar
  },
  plugins: {
    type: Array as PropType<string[]>,
    default: plugins
  },
  modelValue: {
    type: String
  },
  height: {
    type: [Number, String] as PropType<string | number>,
    required: false,
    default: 400
  },
  width: {
    type: [Number, String] as PropType<string | number>,
    required: false,
    default: 'auto'
  },
  showImageUpload: {
    type: Boolean,
    default: false
  },
  enableAutoSave: {
    type: Boolean,
    default: true
  },
  darkMode: {
    type: String,
    default: 'light'
  },
  localeValue: {
    type: String,
    default: 'zh_CN'
  },
  uploadUrl: {
    type: String,
    default: ''
  }
};

/**
 * Save condition used to keep track of latest auto save
 */
export interface AutosaveCondition {
  lastSaveTime: number;
  lastSaveValue: string;
}

/**
 * Save status to be used by the indicator
 */
export interface SaveStatus {
  lastSaveTime: number | null;
  changedAfterSave: boolean;
}

export default defineComponent({
  name: `${prefix}Tinymce`,
  components: { ImgUpload, TinymceSaveIndicator },
  inheritAttrs: false,
  props: tinymceProps,
  emits: ['change', 'update:modelValue', 'inited', 'init-error', 'auto-save'],
  setup(props, { emit, attrs }) {
    const editorRef = ref<Nullable<Editor>>(null);
    const fullscreen = ref(false);
    const isMounted = ref(false);
    const tinymceId = ref<string>(buildShortUUID('tiny-vue'));
    const elRef = ref<Nullable<HTMLElement>>(null);

    const prefixCls = useNamespace('tinymce-container').b();

    const tinymceContent = computed(() => props.modelValue);

    const containerWidth = computed(() => {
      const width = props.width;
      if (isNumber(width)) {
        return `${width}px`;
      }
      return width;
    });

    const skinName = computed(() => {
      return props.darkMode === 'light' ? 'oxide' : 'oxide-dark';
    });

    const langName = computed(() => {
      const lang = props.localeValue;
      return ['zh_CN', 'en'].includes(lang) ? lang : 'zh_CN';
    });

    //keep track of auto save conditions
    const autosave = ref<AutosaveCondition>({
      lastSaveTime: Date.now(),
      lastSaveValue: ''
    });
    const saveStatus = ref<SaveStatus>({
      lastSaveTime: null,
      changedAfterSave: false
    });
    //minimal interval as 10 seconds
    const minimalAutoSaveInterval = 10000;

    const initOptions = computed((): RawEditorSettings => {
      const { height, options, toolbar, plugins } = props;
      const publicPath = '/';
      return {
        selector: `#${unref(tinymceId)}`,
        height,
        toolbar,
        menu: menu,
        plugins,
        language_url:
          publicPath + 'resource/tinymce/langs/' + langName.value + '.js',
        language: langName.value,
        branding: false,
        default_link_target: '_blank',
        link_title: false,
        object_resizing: false,
        auto_focus: true,
        skin: skinName.value,
        skin_url: publicPath + 'resource/tinymce/skins/ui/' + skinName.value,
        content_css:
          publicPath +
          'resource/tinymce/skins/ui/' +
          skinName.value +
          '/content.min.css',
        save_onsavecallback() {},
        forced_root_block: '', // 删除自动添加的p标签
        ...options,
        setup: (editor: Editor) => {
          editorRef.value = editor;
          editor.on('init', (e) => initSetup(e));
          editor.on('change', () => {
            setTimeout(() => {
              tryAutosave(true);
            });
          });
          editor.on('LoadContent', () => {
            isMounted.value = true;
          });
        }
      };
    });

    const disabled = computed(() => {
      const { options } = props;
      const getdDisabled = options && Reflect.get(options, 'readonly');
      const editor = unref(editorRef);
      if (editor) {
        editor.mode.set(getdDisabled ? 'readonly' : 'design');
      }
      return getdDisabled ?? false;
    });

    watch(
      () => attrs.disabled,
      () => {
        const editor = unref(editorRef);
        if (!editor) {
          return;
        }
        editor.mode.set(attrs.disabled ? 'readonly' : 'design');
      }
    );

    onMountedOrActivated(() => {
      if (!initOptions.value.inline) {
        tinymceId.value = buildShortUUID('tiny-vue');
      }
      nextTick(() => {
        setTimeout(() => {
          initEditor();
        }, 30);
      });
    });

    onBeforeUnmount(() => {
      destory();
    });

    onDeactivated(() => {
      destory();
    });

    function destory() {
      if (tinymce !== null) {
        tinymce?.remove?.(unref(initOptions).selector!);
      }
    }

    function initEditor() {
      const el = unref(elRef);
      if (el) {
        el.style.visibility = '';
      }
      tinymce
        .init(unref(initOptions))
        .then((editor) => {
          emit('inited', editor);
        })
        .catch((err) => {
          emit('init-error', err);
        });
    }

    function initSetup(e) {
      const editor = unref(editorRef);
      if (!editor) {
        return;
      }
      const value = props.modelValue || '';
      //init autosave
      autosave.value = {
        lastSaveTime: Date.now(),
        lastSaveValue: value
      };

      setInterval(() => {
        tryAutosave();
      }, minimalAutoSaveInterval);

      editor.setContent(value);
      editor.mode.set(attrs.disabled ? 'readonly' : 'design');
      bindModelHandlers(editor);
      bindHandlers(e, attrs, unref(editorRef));
    }

    function tryAutosave(force = false) {
      if (
        !force &&
        (props.modelValue === unref(autosave).lastSaveValue ||
          unref(autosave).lastSaveTime + minimalAutoSaveInterval > Date.now())
      ) {
        return;
      } else {
        emit('auto-save', props.modelValue);
      }
    }

    function setValue(editor: Recordable, val: string, prevVal?: string) {
      if (
        editor &&
        typeof val === 'string' &&
        val !== prevVal &&
        val !== editor.getContent({ format: attrs.outputFormat })
      ) {
        editor.setContent(val);
      }
    }

    function bindModelHandlers(editor: any) {
      const modelEvents = attrs.modelEvents ? attrs.modelEvents : null;
      const normalizedEvents = Array.isArray(modelEvents)
        ? modelEvents.join(' ')
        : modelEvents;

      watch(
        () => props.modelValue,
        (val: string, prevVal: string) => {
          saveStatus.value = {
            lastSaveTime: autosave.value.lastSaveTime,
            changedAfterSave: true
          };
          setValue(editor, val, prevVal);
        }
      );

      watch(
        () => props.value,
        (val: string, prevVal: string) => {
          setValue(editor, val, prevVal);
        },
        {
          immediate: true
        }
      );

      editor.on(
        normalizedEvents ? normalizedEvents : 'change keyup undo redo',
        () => {
          const content = editor.getContent({ format: attrs.outputFormat });
          emit('update:modelValue', content);
          emit('change', content);
        }
      );

      editor.on('FullscreenStateChanged', (e) => {
        fullscreen.value = e.state;
      });
    }

    function handleImageUploading(name: string) {
      const editor = unref(editorRef);
      if (!editor) {
        return;
      }
      editor.execCommand('mceInsertContent', false, getUploadingImgName(name));
      const content = editor?.getContent() ?? '';
      setValue(editor, content);
    }

    function handleDone(name: string, url: string) {
      const editor = unref(editorRef);
      if (!editor) {
        return;
      }
      const content = editor?.getContent() ?? '';
      const val =
        content?.replace(getUploadingImgName(name), `<img src="${url}"/>`) ??
        '';
      setValue(editor, val);
    }

    function getUploadingImgName(name: string) {
      return `[uploading:${name}]`;
    }

    return {
      prefixCls,
      containerWidth,
      initOptions,
      tinymceContent,
      elRef,
      tinymceId,
      handleImageUploading,
      handleDone,
      tryAutosave,
      editorRef,
      fullscreen,
      disabled,
      autosave,
      saveStatus,
      isMounted
    };
  },
  methods: {
    saveSucceeded(value: string, time: number) {
      this.saveStatus = {
        lastSaveTime: time,
        changedAfterSave: false //shall consider the situation that saving during typing
      };
      this.autosave = {
        lastSaveTime: time,
        lastSaveValue: value
      };
    }
  }
});
</script>

<style lang="less" scoped></style>

<style lang="less">
@prefix-cls: g-tinymce-container;

.@{prefix-cls} {
  position: relative;
  line-height: normal;

  textarea {
    z-index: -1;
    visibility: hidden;
  }
}
</style>
