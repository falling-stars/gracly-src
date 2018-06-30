import Vue from 'vue'
import App from '../m/App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {createRouter} from '../m/router'
import {createStore} from '../m/store'

Vue.use(MintUI)

const router = createRouter()
const store = createStore()
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})