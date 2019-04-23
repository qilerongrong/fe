import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const createRouter = function (options) {
  return new VueRouter({
    mode: (options && options.mode) || 'history',
    routes: options.routes || [],
    base: options.base || '/',
    scrollBehavior: options.scrollBehavior
  })
}
export { createRouter }
