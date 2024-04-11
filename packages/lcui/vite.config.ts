/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import purgeIcons from 'vite-plugin-purge-icons';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild = true) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'ui/icon/assets')],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]'
  });
  return svgIconsPlugin;
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    // vite-plugin-svg-icons
    configSvgIconsPlugin(),
    // vite-plugin-purge-icons
    purgeIcons()
  ],
  optimizeDeps: {
    // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
    include: [
      '@iconify/iconify',
      'ant-design-vue/es/locale/zh_CN',
      'ant-design-vue/es/locale/en_US',
      'bpmn-js/lib/NavigatedViewer'
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
