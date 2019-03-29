import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const createRouter = function(options){
    // if(!options.routes || options.routes.length === 0){
    //     return 
    // }
    return new VueRouter({
        mode: options && options.mode || 'history',
        routes: options.routes || [],
        base: options.base || '/',
        scrollBehavior: options.scrollBehavior
    })
}

export { createRouter }
