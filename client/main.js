import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/style/common.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/gracly/npm/base'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})