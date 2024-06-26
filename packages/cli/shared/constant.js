/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2024-04-11 10:23:20
 * @FilePath: /lcui/packages/cli/shared/constant.js
 */
const { resolve } = require('path');
const { version } = require('../package.json');

exports.VERSION = version;
exports.isProd = process.env.NODE_ENV === 'production';
exports.CWD = process.cwd();
exports.UI_DIR = resolve(this.CWD, '../lcui/ui');
exports.UI_NAMESPACE = 'g';
exports.CSS_CLASS_PREFIX = 'g';
exports.TESTS_DIR_NAME = 'test';
exports.INDEX_FILE_NAME = 'index.ts';
exports.DOCS_FILE_NAME = 'index.md';
exports.VUE_UI_IGNORE_DIRS = ['shared', 'style', 'components'];
exports.VUE_UI_FILE_NAME = 'vue-lcui.ts';
exports.VUE_UI_FILE = resolve(this.UI_DIR, this.VUE_UI_FILE_NAME);
exports.SITES_DIR = resolve(this.CWD, '../lcui/docs');
exports.SITES_COMPONENTS_DIR_NAME = 'components';
exports.SITES_COMPONENTS_DIR_NAME_EN = 'en-US/components';
exports.SITES_COMPONENTS_DIR = resolve(
  this.SITES_DIR,
  this.SITES_COMPONENTS_DIR_NAME
);
exports.VITEPRESS_DIR = resolve(this.SITES_DIR, '.vitepress');
exports.VITEPRESS_SIDEBAR_FILE_NAME = 'sidebar.ts';
exports.VITEPRESS_SIDEBAR_FILE = resolve(
  this.VITEPRESS_DIR,
  `config/${this.VITEPRESS_SIDEBAR_FILE_NAME}`
);
exports.VITEPRESS_SIDEBAR_FILE_NAME_EN = 'enSidebar.ts';
exports.VITEPRESS_SIDEBAR_FILE_EN = resolve(
  this.VITEPRESS_DIR,
  `config/${this.VITEPRESS_SIDEBAR_FILE_NAME_EN}`
);
// 这里的分类顺序将会影响最终生成的页面侧边栏顺序
exports.VITEPRESS_SIDEBAR_CATEGORY = [
  '通用',
  '导航',
  '反馈',
  '数据录入',
  '数据展示',
  '布局',
  '高级组件'
];
exports.VITEPRESS_SIDEBAR_CATEGORY_EN = [
  'General',
  'Navigation',
  'Feedback',
  'Data Entry',
  'Data Display',
  'Layout',
  'Advanced Components'
];
exports.VITEPRESS_SIDEBAR_CATEGORY_ZH_TO_EN = {
  通用: 'General',
  导航: 'Navigation',
  反馈: 'Feedback',
  数据录入: 'Data Entry',
  数据展示: 'Data Display',
  布局: 'Layout',
  高级组件: 'Advanced Components'
};
exports.COMPONENT_PARTS_MAP = [
  {
    name: 'component（组件）',
    value: 'component'
  },
  {
    name: 'directive（指令）',
    value: 'directive'
  },
  {
    name: 'service（服务）',
    value: 'service'
  }
];

exports.CREATE_SUPPORT_TYPE_MAP = Object.freeze({
  component: 'component',
  lcui: 'lcui'
});
exports.CREATE_SUPPORT_TYPES = Object.keys(this.CREATE_SUPPORT_TYPE_MAP);
exports.CREATE_UNFINISHED_TYPES = [];
exports.WHITE_LIST_READY_COMPONENTS = [
  'select',
  'tooltip',
  'table',
  'tabs',
  'form',
  'dropdown',
  'drawer',
  'date-picker',
  'input-number',
  'tree'
];
