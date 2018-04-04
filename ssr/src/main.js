import Vue from 'vue'
import App from './App'
import {createRouter} from './router'
import {createStore} from './store'
import {sync} from 'vuex-router-sync'
import '~/assets/images/favicon.ico'
import '~/assets/style/common.css'
import 'font-awesome/css/font-awesome.min.css'

export function createApp() {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}