/*
 * @Author: changluo
 * @Description:
 * @Date: 2023-02-16 17:16:21
 */
require('esbuild-register');
const path = require('path');
const fs = require('fs-extra');
const logger = require('../shared/logger');
const { CSS_CLASS_PREFIX } = require('../shared/constant');
const lightTheme = require('../../lcui/ui/theme/themes/light.ts').default;
const darkTheme = require('../../lcui/ui/theme/themes/dark.ts').default;

const lightFileStr_scss = Object.entries(lightTheme)
  .map(([key, value]) => {
    if (key.startsWith('--')) {
      key = key.slice(2);
      return `$${key}: var(--${key}, ${value});`;
    }
    return `$${CSS_CLASS_PREFIX}-${key}: var(--${CSS_CLASS_PREFIX}-${key}, ${value});`;
  })
  .join('\n');
const lightFileStr_less = Object.entries(lightTheme)
  .map(([key, value]) => {
    if (key.startsWith('--')) {
      key = key.slice(2);
      return `@${key}: var(--${key}, ${value});`;
    }
    return `@${CSS_CLASS_PREFIX}-${key}: var(--${CSS_CLASS_PREFIX}-${key}, ${value});`;
  })
  .join('\n');

let darkCssVariablesStr = Object.entries(darkTheme)
  .map(([key, value]) => {
    if (key.startsWith('--')) {
      return `${key}: ${value};`;
    }
    return `--${CSS_CLASS_PREFIX}-${key}: ${value};`;
  })
  .join('\n');

darkCssVariablesStr = `.dark{
${darkCssVariablesStr}
}`;

exports.generateTheme = async () => {
  const lightThemeFilePath_scss = path.resolve(
    __dirname,
    '../../lcui/ui/theme/theme.scss'
  );
  const lightThemeFilePath_less = path.resolve(
    __dirname,
    '../../lcui/ui/theme/theme.less'
  );

  // 生成深色主题css文件
  const darkThemeFilePath = path.resolve(
    __dirname,
    '../../lcui/ui/theme/darkTheme.css'
  );

  try {
    await fs.outputFile(lightThemeFilePath_scss, lightFileStr_scss, 'utf-8');
    await fs.outputFile(lightThemeFilePath_less, lightFileStr_less, 'utf-8');
    logger.success(
      `生成${lightThemeFilePath_scss}-theme主题文件成功, ${lightThemeFilePath_scss}!`
    );
    logger.success(
      `生成${lightThemeFilePath_less}-theme主题文件成功, ${lightThemeFilePath_less}!`
    );

    await fs.outputFile(darkThemeFilePath, darkCssVariablesStr, 'utf-8');
    logger.success(`生成 darkTheme css 主题变量成功, ${darkThemeFilePath}!`);
  } catch (err) {
    logger.success('生成主题文件失败！');
  }
};
