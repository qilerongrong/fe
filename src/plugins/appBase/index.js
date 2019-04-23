import initDirctives from './directives'
import initFilters from './filters'
import initMixin from './mixin'
export default {
  install (Vue, options) {
    Vue.$config = {}
    Vue.prototype.$message = function () {
      return {}
    }
    initDirctives(Vue)
    initFilters(Vue)
    initMixin(Vue)
  }
}
