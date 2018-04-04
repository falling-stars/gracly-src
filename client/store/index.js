import Vuex from 'vuex'
import Vue from 'vue'
// import {mobileDevice} from '../assets/gracly/npm/base'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // mobile: mobileDevice(),
    mobile: false,
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {}
})
