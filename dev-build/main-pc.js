import Vue from 'vue'
import App from '../pc/App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {createRouter} from '../pc/router'
import {createStore} from '../pc/store'

Vue.use(MintUI)

const router = createRouter()
const store = createStore()
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})