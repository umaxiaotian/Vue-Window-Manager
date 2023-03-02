const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue-window-manager': 'vue-window-manager/dist/your-package-name.esm.js'
      }
    }
  }
})
