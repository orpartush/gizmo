import Vue from 'vue'
import Vuex from 'vuex'
import wapStore from  './wap-store.js'
Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    inProgress: false,
  },
  mutations: {
    setInProgress(state, {inProgress}){
      state.inProgress = inProgress
    }
  },
  getters: {
    inProgress(state) {
      return state.inProgress
    },
  },
  modules: {
    wapStore
  }
})
