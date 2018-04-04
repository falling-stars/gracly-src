const load = component => () => import(`../pages/${component}.vue`)
export default [
  {
    path: '/',
    component: load('index'),
    meta: {keepAlive: true}
  },
  {
    path: '/start',
    component: load('start'),
    meta: {keepAlive: true}
  },
  {
    path: '/document',
    component: load('document'),
    meta: {keepAlive: true}
  },
  {
    path: '/hub',
    component: load('hub')
  },
  {
    path: '/about',
    component: load('about'),
    meta: {keepAlive: true}
  }
]
