const HelloWord = () => import(/* webpackChunkName : "hello"  */'@/demo/components/pages/hello')

export default [
  {
    path: '/',
    name: 'home',
    component: HelloWord
  },
  {
    path: '/hello',
    name: 'hello',
    component: HelloWord
  }
]
