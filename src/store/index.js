import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import order from './modules/order'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    order,
  }
})
