import { defineComponent, ref, watch, onMounted, render } from 'vue';
import { shadowDomProps, ShadowDomProps } from './shadow-dom-types';
import { prefix } from '../../shared/utils/common-var';

export default defineComponent({
  name: `${prefix}ShadowDom`,
  props: shadowDomProps,
  setup(props: ShadowDomProps, { slots }) {
    const host = ref<HTMLElement>();
    const sheet = ref<HTMLElement>();
    const shadowRoot = ref<ShadowRoot>();
    const renderContent = () => {
      if (shadowRoot.value) {
        if (props.innerHTML) {
          shadowRoot.value.innerHTML = props.innerHTML;
        } else {
          shadowRoot.value.innerHTML = '';
          if (slots.default) {
            slots.default().forEach((vNode) => {
              const wrapper = document.createElement('div');
              render(vNode, wrapper);
              shadowRoot.value.appendChild(wrapper.children[0]);
            });
          }
        }
        sheet.value?.replaceSync(props.cssSheet);
        shadowRoot.value.adoptedStyleSheets = [sheet.value];
      }
    };
    watch([() => props.innerHTML, () => props.cssSheet], renderContent);
    onMounted(() => {
      sheet.value = new CSSStyleSheet();
      if (host.value && sheet.value) {
        shadowRoot.value = host.value.attachShadow({ mode: 'open' });
        renderContent();
      }
    });
    return () => {
      return <div ref={host}></div>;
    };
  }
});
