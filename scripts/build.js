/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
const path = require('path');
const shell = require('shelljs');

const runBuild = async () => {
  try {
    await shell.mkdir('-p', 'dist');
    await shell.exec('pnpm --filter lc-gui docs:build');
    await shell.cp(
      '-R',
      './packages/lcui/docs/.vitepress/dist/*',
      path.resolve(path.resolve(process.cwd(), 'dist'))
    );
    console.log('vite build success...');
  } catch (error) {
    console.log('vite build error:\n' + error);
    process.exit(1);
  }
};
runBuild();
