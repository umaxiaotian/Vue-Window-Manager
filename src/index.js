import vueWindowManager from './components/vueWindowManager.vue'

export default {
  install: (app) => {
    app.component(vueWindowManager.name, vueWindowManager)
  }
}

export { vueWindowManager }