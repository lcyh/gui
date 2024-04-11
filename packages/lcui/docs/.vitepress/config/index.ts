/*
 * @Author: changluo
 * @Description: 
 */
import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';
import packageJson from '../../../package.json';

export default ({ mode }) => {
  const basePath = mode === 'development' ? '/' : '/gui/';

  return {
    base: basePath,
    lang: 'en-ZH',
    title: 'lc-gui',
    description: 'lc-gui 组件库',
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
          href: `https://cdn.jsdelivr.net/npm/lc-gui@${packageJson.version}/theme/darkTheme.css`
        }
      ]
    ],
    markdown,
    themeConfig: {
      sidebar,
      nav,
      logo: '/logo.svg',
      search:{
        provider: 'algolia',
        options:{
          appId: '2VVCDBKJ15',
          apiKey: '086c309653cd41671d2084ed5bbdfb59',
          indexName: 'lcyhio'
        }
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/lcyh/gui.git' }
      ],
      outlineTitle: '快速前往',
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present vaebe'
      }
    }
  };
};
