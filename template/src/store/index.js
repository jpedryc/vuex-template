import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'

Vue.use(Vuex)

const strict = (process.env.MODE_ENV !== 'production')

const store = new Vuex.Store({
  strict,
  modules: {
    layout
  },
})
export default store

Vue.use(
  Vuex,
  store,
  strict,
)
