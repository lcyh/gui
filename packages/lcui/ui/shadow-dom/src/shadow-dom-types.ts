import type { ExtractPropTypes } from 'vue';

export const shadowDomProps = {
  innerHTML: {
    type: String,
    default: ''
  },
  cssSheet: {
    type: String,
    default: ''
  }
} as const;

export type ShadowDomProps = ExtractPropTypes<typeof shadowDomProps>;
