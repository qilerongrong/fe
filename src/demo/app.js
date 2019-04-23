import Vue from 'vue'
import { createRouter } from './router'
import routes from './router/routes'
import App from './app.vue'
import store from './store'
import basePlugin from '../plugins/appBase'

Vue.use(basePlugin)
const router = createRouter({ routes })
const createApp = function () {
  const app = new Vue({
    template: '<App></App>',
    router,
    components: { App },
    store
  })
  return { app, router, store }
}
export { createApp }
