// 导入vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// 导入modules
import user from './modules/user'

Vue.use(Vuex)

export default function() {
  return new Vuex.Store({
    state: {
      homeData: {
        category_roots: []
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { req, app }) {
        const { data } = await app.$axios.get('v1/home')
        commit('SetHomeData', data)
      }
    },
    mutations: {
      SetHomeData(state, homeData) {
        state.homeData = homeData
      }
    },
    modules: {
      user
    }
  })
}
