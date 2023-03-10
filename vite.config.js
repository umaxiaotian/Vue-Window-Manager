
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'vueWindowManager',
      fileName: (format) => `vueWindowManager.${format}.js`,
    },
    rollupOptions: {
      // Vue 3のESモジュールをサポートするため、"vue"パッケージを外部モジュールとして指定します。
      external: ['vue'],
      output: {
        // ESモジュールとして出力するようにします。
        format: 'es',
        //CSSの書き出し
        assetFileNames: "default.[ext]",
      
      },
    },
    commonjsOptions: {
      esmExternals: true 
   },
  },
  publicDir: "public",
});

