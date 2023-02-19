import { fileURLToPath, URL } from 'node:url';

import { defineConfig, splitVendorChunkPlugin, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
    const viteEnv = loadEnv(mode, process.cwd())

  return {
    /** 好像未生效 */
    define: {
      __APP_VERSION__: 1.0,

      /** 编译时标记 覆盖默认值true，设置为false，编译时就会去掉OptionsAPI. */
      __VUE_OPTIONS_API__: false,
    },
    /**
     * 在嵌套的公共路径下部署项目, 构建时所有资源的路径根据base配置被重写。
     * 指定了上一级公共目录，这一行就不能少
     */
    base: mode === 'development' ? '/' : './dist',

    /** 指定公共目录，可用项目根目录的相对路径 */
    // publicDir: '../../../../dist/www/public',
    plugins: [
      vue(),
      vueJsx(),

      /** splitVendorChunkPlugin 分块构建 */
      splitVendorChunkPlugin(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: path.resolve(__dirname, './dist'),
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            /**
             * 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
             */
            vue: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
    },
  }
})
