import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';
import packageJson from '../../../package.json';

export default ({ mode }) => {
  const basePath = mode === 'development' ? '/' : '/gui/';

  return {
    base: basePath,
    lang: 'en-ZH',
    title: 'gopher-gui',
    description: 'gopher-gui 组件库',
    lastUpdated: true,
    ignoreDeadLinks: true, // 忽略死链接
    head: [
      // 这里的路径没有被自动更改 手动更改路径
      [
        'link',
        { rel: 'icon', type: 'image/svg+xml', href: `${basePath}logo.svg` }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: `https://cdn.jsdelivr.net/npm/gopher-gui@${packageJson.version}/theme/darkTheme.css`
        }
      ]
    ],
    markdown,
    themeConfig: {
      sidebar,
      nav,
      logo: '/logo.svg',
      algolia: {
        appId: 'K0NNJA38K6',
        apiKey: '0b6d20552d2073390d2bbb0a84fb49dd',
        indexName: 'lcui'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/lcyh/lc-ui.git' }
      ],
      outlineTitle: '快速前往',
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present vaebe'
      }
    }
  };
};
