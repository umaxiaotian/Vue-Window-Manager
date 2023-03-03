import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry:"src/index.ts",
      name: "vueWindowManager",
      fileName: (format) => `vueWindowManager-${format}.js`
    },
    rollupOptions: {
      external: "vue",
      output: {
        globals: {
          vue: "Vue",
        }
      }
    }
  }
})
