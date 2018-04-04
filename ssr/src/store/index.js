import Vue from 'vue'
import Vuex from 'vuex'
import Store from '~/store'

Vue.use(Vuex)

export function createStore() {
  return Store
}